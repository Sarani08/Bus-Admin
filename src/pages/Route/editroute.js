import Page from 'components/Page';
import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';
import firebase from '../Firebase';

class editroute extends Component {

    constructor(props) {
        super(props);

        //  this.ref = firebase.firestore().collection('routes');

        this.state = {
            routename: '',
            startstation: '',
            finalstation: '',
            distance: '',
            avgtraveltime: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('routes').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const route = doc.data();
                this.setState({
                    key: doc.id,
                    routename: route.routename,
                    startstation: route.startstation,
                    finalstation: route.finalstation,
                    distance: route.distance,
                    avgtraveltime: route.avgtraveltime
                });
            } else {
                console.log("No such document!");
            }
        });
    }

        onChange = (e) => {
            const state = this.state
            state[e.target.name] = e.target.value;
            this.setState({ route: state });
        }


        onSubmit = (e) => {
            e.preventDefault();

            const { routename, startstation, finalstation, distance, avgtraveltime } = this.state;

            const updateRef = firebase.firestore().collection('routes').doc(this.state.key);
            updateRef.set({
                routename,
                startstation,
                finalstation,
                distance,
                avgtraveltime
            }).then((docRef) => {
                this.setState({
                    routename: '',
                    startstation: '',
                    finalstation: '',
                    distance: '',
                    avgtraveltime: ''
                });
                this.props.history.push("/viewroute")
            })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }



        render() {
            const { routename, startstation, finalstation, distance, avgtraveltime } = this.state;

            return (
                <Page title="Add Route" breadcrumbs={[{ name: 'Add Route', active: true }]}>
                    <Row>
                        <Col xl={6} lg={12} md={12}>
                            <Card>
                                <CardHeader>Route</CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.onSubmit}>
                                        <FormGroup>
                                            <Label for="routename">Route Name</Label>
                                            <Input
                                                type="text"
                                                name="routename"
                                                value={this.state.routename}
                                                onChange={this.onChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="startstation">Start Station</Label>
                                            <Input
                                                type="text"
                                                name="startstation"
                                                value={this.state.startstation}
                                                onChange={this.onChange}

                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="finalstation">Final Station</Label>
                                            <Input
                                                type="text"
                                                name="finalstation"
                                                value={this.state.finalstation}
                                                onChange={this.onChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="distance">Distance</Label>
                                            <Input
                                                type="number"
                                                name="distance"
                                                value={this.state.distance}
                                                onChange={this.onChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="avgtraveltime">Average Travel Time</Label>
                                            <Input
                                                type="time"
                                                name="avgtraveltime"
                                                value={this.state.avgtraveltime}
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

    export default editroute;
