import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';


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
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
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
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Travel Date</th>
                                        <th>Travel Time</th>
                                        <th>Boarding Gate</th>
                                        <th>Bus Reg Number</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.timetables.map(timetable =>
                  <tr>
                    <td><Link to={`/show/${timetable.key}`}>{timetable.key}</Link></td>
                    <td>{timetable.traveldate}</td>
                    <td>{timetable.traveltime}</td>
                    <td>{timetable.boardinggate}</td>
                    <td><Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, timetable.key)} class="btn btn-danger">Delete</button></td>
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

export default viewtimetable;
