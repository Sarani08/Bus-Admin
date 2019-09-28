import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';


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
            const { busregnumber, model, mileage, fuelefficiency, manufacturedyear }  = doc.data();

            buses.push({
            key: doc.id,
            busregnumber,
            model,
            mileage,
            fuelefficiency,
            manufacturedyear
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
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
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
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Bus Reg Number</th>
                                        <th>Model</th>
                                        <th>Mileage</th>
                                        <th>Fuel Efficiency</th>
                                        <th>Manufactured Year</th>
                                        <th>Driver Id</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.buses.map(bus =>
                  <tr>
                    <td><Link to={`/show/${bus.key}`}>{bus.busregnumber}</Link></td>
                    <td>{bus.model}</td>
                    <td>{bus.mileage}</td>
                    <td>{bus.fuelefficiency}</td>
                    <td>{bus.manufacturedyear}</td>
                    <td></td>
                    <td><Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, bus.key)} class="btn btn-danger">Delete</button></td>
                  </tr>
                )}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </Page>
    );
}
}

export default viewbus;
