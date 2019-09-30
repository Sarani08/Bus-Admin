import Page from 'components/Page';
import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import firebase from '../Firebase';


class editstation extends Component {

    constructor(props) {
        super(props);


        this.state = {
            stationname: '',
            location: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('stations').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const station = doc.data();
                this.setState({
                    key: doc.id,
                    stationname: station.stationname,
                    location: station.location

                });
            } else {
                console.log("No such document!");
            }
        });
    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ station: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { stationname, location } = this.state;

        const updateRef = firebase.firestore().collection('stations').doc(this.state.key);
        updateRef.set({
            stationname,
            location
        }).then((docRef) => {
            this.setState({
                stationname: '',
                location: ''
            });
            alert('Station Edited Successfully');
            this.props.history.push("/viewstation")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }


    render() {
        const { stationname, location } = this.state;
        return (
            <Page title="Edit Station" breadcrumbs={[{ name: 'Edit Station', active: true }]}>
                <Row>
                    <Col xl={6} lg={12} md={12}>
                        <Card>
                            <CardHeader>Station</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.onSubmit}>
                                    <FormGroup>
                                        <Label for="stationname">Station Name</Label>
                                        <Input
                                            type="text"
                                            name="stationname"
                                            value={this.state.stationname}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="location">Location</Label>
                                        <Input
                                            type="text"
                                            name="location"
                                            placeholder="Enter location"
                                            value={this.state.location}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>

                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button>Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Page>
        );
    }
}

export default editstation;
