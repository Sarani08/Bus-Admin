import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

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
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
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
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Route ID</th>
                                        <th>Route Name</th>
                                        <th>Start Station</th>
                                        <th>Final Station</th>
                                        <th>Distance</th>
                                        <th>Average Travel Time</th>
                                        <th>Edit</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.routes.map(route =>
                  <tr>
                    <td><Link to={`/show/${route.key}`}>{route.key}</Link></td>
                    <td>{route.routename}</td>
                    <td>{route.startstation}</td>
                    <td>{route.finalstation}</td>
                    <td>{route.distance}</td>
                    <td>{route.avgtraveltime}</td>
                    <td><Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, route.key)} class="btn btn-danger">Delete</button></td>
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

export default viewroute;
