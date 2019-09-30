import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class viewroute extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('routes');
        this.unsubscribe = null;
        this.state = {
            routes: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const routes = [];
        querySnapshot.forEach((doc) => {
            const { routename, startstation, finalstation, distance, avgtraveltime }  = doc.data();

            routes.push({
            key: doc.id,
            routename,
            startstation,
            finalstation,
            distance,
            avgtraveltime
          });
        });
        this.setState({
            routes
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      } 

      delete(id){
        firebase.firestore().collection('routes').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          alert('Route Deleted Successfully');
          this.props.history.push("/viewroute")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

      generatePdf() {
  
        var doc = new jsPDF('p', 'pt');
        var res = doc.autoTableHtmlToJson(document.getElementById("route-table"));
    
        var header = function(data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          doc.text("Routes Report", data.settings.margin.left, 40);
        };
    
        var options = {
          margin: {
            top: 80
          }, 
          beforePageContent: header,
    
          startY: doc.autoTableEndPosY() + 60
        };
      
        doc.autoTable(res.columns, res.data, options);
      
        doc.save("routereport.pdf");
    
    }

render(){
    return (
        <Page
            title="View Route"
            breadcrumbs={[{ name: 'View Route', active: true }]}
            className="TablePage"
        >
            <Row>
                <Col>
                    <Card className="mb-3">
                        <CardHeader>Routes</CardHeader>
                        <CardBody>
                            <Table responsive id="route-table">
                                <thead>
                                    <tr>
                                        <th>Route ID</th>
                                        <th>Route Name</th>
                                        <th>Start Station</th>
                                        <th>Final Station</th>
                                        <th>Distance</th>
                                        <th>Average Travel Time</th>
                                        <th></th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.routes.map(route =>
                  <tr>
                    <td>{route.key}</td>
                    <td>{route.routename}</td>
                    <td>{route.startstation}</td>
                    <td>{route.finalstation}</td>
                    <td>{route.distance}</td>
                    <td>{route.avgtraveltime}</td>
                    <td><Link to={`/editroute/${route.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, route.key)} class="btn btn-danger">Delete</button></td>
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

export default viewroute;
