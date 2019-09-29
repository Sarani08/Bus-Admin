import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';


class viewstation extends Component {

    
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('stations');
        this.unsubscribe = null;
        this.state = {
            stations: []
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        const stations = [];
        querySnapshot.forEach((doc) => {
            const { stationname, location }  = doc.data();

            stations.push({
            key: doc.id,
            stationname,
            location
          });
        });
        this.setState({
            stations
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      } 

      delete(id){
        firebase.firestore().collection('stations').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
render(){
    return (
        <Page
            title="View Station"
            breadcrumbs={[{ name: 'View Station', active: true }]}
            className="TablePage"
        >
            <Row>
                <Col>
                    <Card className="mb-3">
                        <CardHeader>Stations</CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Station ID</th>
                                        <th>Station Name</th>
                                        <th>Location</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.stations.map(station =>
                  <tr>
                    <td>{station.key}</td>
                    <td>{station.stationname}</td>
                    <td>{station.location}</td>
                    <td><Link to={`/editstation/${station.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, station.key)} class="btn btn-danger">Delete</button></td>
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

export default viewstation;
