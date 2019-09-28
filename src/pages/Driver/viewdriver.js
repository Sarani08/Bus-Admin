import Page from 'components/Page';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../Firebase';


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
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
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
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Driver ID</th>
                                        <th>License Number</th>
                                        <th>Full Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.drivers.map(driver =>
                  <tr>
                    <td><Link to={`/show/${driver.key}`}>{driver.key}</Link></td>
                    <td>{driver.licensenumber}</td>
                    <td>{driver.fullname}</td>
                    <td>{driver.age}</td>
                    <td>{driver.gender}</td>
                    <td><Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link></td>
                    <td><button onClick={this.delete.bind(this, driver.key)} class="btn btn-danger">Delete</button></td>
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

export default viewdriver;
