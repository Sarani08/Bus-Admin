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


class createstation extends Component {

    constructor() {
        super();

        this.ref = firebase.firestore().collection('stations');

        this.state = {
            stationname: '',
            location: ''
        };
    }

    
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { stationname, location } = this.state;

        this.ref.add({
            stationname,
            location
        }).then((docRef) => {
            this.setState({
                stationname: '',
                location: ''
            });
            alert('Station Added Successfully');
            this.props.history.push("/viewstation")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }


render(){
    const { stationname, location } = this.state;
    return (
        <Page title="Add Station" breadcrumbs={[{ name: 'Add Station', active: true }]}>
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
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input
                                        type="text"
                                        name="location"
                                        placeholder="Enter location"
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

export default createstation;
