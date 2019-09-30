import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


class viewtimetable extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('timetables');
        this.unsubscribe = null;
        this.state = {
            timetables: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const timetables = [];
        querySnapshot.forEach((doc) => {
            const { traveldate, traveltime, boardinggate}  = doc.data();

            timetables.push({
            key: doc.id,
            traveldate,
            traveltime,
            boardinggate
        });
        });
        this.setState({
            timetables
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      } 

      delete(id){
        firebase.firestore().collection('timetables').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          alert('Timetable Deleted Successfully');
          this.props.history.push("/viewtimetable")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

      generatePdf() {
  
        var doc = new jsPDF('p', 'pt');
        var res = doc.autoTableHtmlToJson(document.getElementById("timetable-table"));
    
        var header = function(data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          doc.text("Timetables", data.settings.margin.left, 40);
        };
    
        var options = {
          margin: {
            top: 80
          }, 
          beforePageContent: header,
    
          startY: doc.autoTableEndPosY() + 60
        };
      
        doc.autoTable(res.columns, res.data, options);
      
        doc.save("timetable.pdf");
    
    }

render(){
    return (
        <Page
            title="View Timetable"
            breadcrumbs={[{ name: 'View Timatable', active: true }]}
            className="TablePage"
        >
            <Row>
                <Col>
                    <Card className="mb-3">
                        <CardHeader>Timetable</CardHeader>
                        <CardBody>
                            <Table responsive id="timetable-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Travel Date</th>
                                        <th>Travel Time</th>
                                        <th>Boarding Gate</th>
                                        <th>Bus Reg Number</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.timetables.map(timetable =>
                  <tr>
                    <td>{timetable.key}</td>
                    <td>{timetable.traveldate}</td>
                    <td>{timetable.traveltime}</td>
                    <td>{timetable.boardinggate}</td>
                    <td></td>
                    <td><Link to={`/edittimetable/${timetable.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, timetable.key)} class="btn btn-danger">Delete</button></td>
                  </tr>
                )}
                                </tbody>
                            </Table>
                        </CardBody>
                        <Button color="warning" onClick={() => this.generatePdf()}>Export(pdf)</Button>
                    </Card>
                </Col>
            </Row>


        </Page>
    );
}
}

export default viewtimetable;
