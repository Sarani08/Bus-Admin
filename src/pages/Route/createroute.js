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

class createroute extends Component {

    constructor() {
        super();

        this.ref = firebase.firestore().collection('routes');

        this.state = {
            routename: '',
            startstation: '',
            finalstation: '',
            distance: '',
            avgtraveltime: ''
        };
    }

    
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { routename, startstation, finalstation, distance, avgtraveltime } = this.state;

        this.ref.add({
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
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="startstation">Start Station</Label>
                                    <Input
                                        type="text"
                                        name="startstation"
                                        onChange={this.onChange}

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="finalstation">Final Station</Label>
                                    <Input
                                        type="text"
                                        name="finalstation"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="distance">Distance</Label>
                                    <Input
                                        type="number"
                                        name="distance"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                 <FormGroup>
                                    <Label for="avgtraveltime">Average Travel Time</Label>
                                    <Input
                                        type="time"
                                        name="avgtraveltime"
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

export default createroute;
