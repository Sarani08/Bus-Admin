import Page from 'components/Page';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table,Button } from 'reactstrap';
import firebase from '../Firebase';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


class viewdriver extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('drivers');
        this.unsubscribe = null;
        this.state = {
            drivers: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const drivers = [];
        querySnapshot.forEach((doc) => {
            const { licensenumber, fullname, age, gender }  = doc.data();
          drivers.push({
            key: doc.id,
            licensenumber,
            fullname,
            age,
            gender,
          });
        });
        this.setState({
            drivers
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }

      delete(id){
        firebase.firestore().collection('drivers').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          alert('Driver Deleted Successfully');
          this.props.history.push("/viewdriver")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

      generatePdf() {
  
        var doc = new jsPDF('p', 'pt');
        var res = doc.autoTableHtmlToJson(document.getElementById("driver-table"));
    
        var header = function(data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          doc.text("Drivers Report", data.settings.margin.left, 40);
        };
    
        var options = {
          margin: {
            top: 80
          }, 
          beforePageContent: header,
    
          startY: doc.autoTableEndPosY() + 60
        };
      
        doc.autoTable(res.columns, res.data, options);
      
        doc.save("driverreport.pdf");
    
    }

render(){
    return (
        <Page
            title="View Driver"
            breadcrumbs={[{ name: 'View Driver', active: true }]}
            className="TablePage"
        >
            <Row>
                <Col>
                    <Card className="mb-3">
                        <CardHeader>Drivers</CardHeader>
                        <CardBody>
                            <Table responsive id ="driver-table">
                                <thead>
                                    <tr>
                                        <th>Driver ID</th>
                                        <th>License Number</th>
                                        <th>Full Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.drivers.map(driver =>
                  <tr>
                    <td>{driver.key}</td>
                    <td>{driver.licensenumber}</td>
                    <td>{driver.fullname}</td>
                    <td>{driver.age}</td>
                    <td>{driver.gender}</td>
                    <td><Link to={`/editdriver/${driver.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, driver.key)} class="btn btn-danger">Delete</button></td>
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

export default viewdriver;
