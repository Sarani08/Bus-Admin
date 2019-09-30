import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Table } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


class viewbus extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('buses');
        this.unsubscribe = null;
        this.state = {
            buses: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const buses = [];
        querySnapshot.forEach((doc) => {
          const { busregnumber, model, mileage, fuelefficiency, manufacturedyear,bname,bno,bprice,bseat }  = doc.data();

            buses.push({
            key: doc.id,
            busregnumber,
            model,
            mileage,
            fuelefficiency,
            manufacturedyear,
            bname,
            bno,
            bprice,
            bseat
          });
        });
        this.setState({
            buses
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      } 

      delete(id){
        firebase.firestore().collection('buses').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          alert('Bus Deleted Successfully');
          this.props.history.push("/viewbus")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

      generatePdf() {
  
        var doc = new jsPDF('p', 'pt');
        var res = doc.autoTableHtmlToJson(document.getElementById("bus-table"));
    
        var header = function(data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          doc.text(" Busses Report ", data.settings.margin.left, 40);
        };
    
        var options = {
          margin: {
            top: 80
          }, 
          beforePageContent: header,
    
          startY: doc.autoTableEndPosY() + 60
        };
      
        doc.autoTable(res.columns, res.data, options);
      
        doc.save("busreport.pdf");
    
    }

render(){
    return (
        <Page
            title="View Bus"
            breadcrumbs={[{ name: 'View Bus', active: true }]}
            className="TablePage"
        >
            <Row>
                <Col>
                    <Card className="mb-3">
                        <CardHeader>Bus</CardHeader>
                        <CardBody>
                            <Table responsive id="bus-table" >
                                <thead>
                                    <tr>
                                        <th>Bus Reg Number</th>
                                        <th>Model</th>
                                        <th>Mileage</th>
                                        <th>Fuel Efficiency</th>
                                        <th>Manufactured Year</th>
                                        <th>Bus Name</th>
                                        <th>Bus No</th>
                                        <th>Bus Price</th>
                                        <th>Bus Seat</th>
                                        <th>Driver Id</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.buses.map(bus =>
                  <tr>
                    <td>{bus.busregnumber}</td>
                    <td>{bus.model}</td>
                    <td>{bus.mileage}</td>
                    <td>{bus.fuelefficiency}</td>
                    <td>{bus.manufacturedyear}</td>
                    <td>{bus.bname}</td>
                    <td>{bus.bno}</td>
                    <td>{bus.bprice}</td>
                    <td>{bus.bseat}</td>
                    <td></td>
                    <td><Link to={`/editbus/${bus.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, bus.key)} class="btn btn-danger">Delete</button></td>
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

export default viewbus;
