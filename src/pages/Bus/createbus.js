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


class createbus extends Component {

    constructor() {
        super();

        this.ref = firebase.firestore().collection('buses');

        this.state = {
            busregnumber: '',
            model: '',
            mileage: '',
            fuelefficiency: '',
            manufacturedyear: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { busregnumber, model, mileage, fuelefficiency, manufacturedyear } = this.state;

        this.ref.add({
            busregnumber,
            model,
            mileage,
            fuelefficiency,
            manufacturedyear
        }).then((docRef) => {
            this.setState({
            busregnumber: '',
            model: '',
            mileage: '',
            fuelefficiency: '',
            manufacturedyear: ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }




render() {
    return (
        <Page title="Add Bus" breadcrumbs={[{ name: 'Add Bus', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Bus</CardHeader>
                        <CardBody>
                            <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                    <Label for="busregnumber">Bus Reg Number</Label>
                                    <Input
                                        type="text"
                                        name="busregnumber"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="model">Model</Label>
                                    <Input
                                        type="text"
                                        name="model"
                                        placeholder="Enter model(toyota,nissan)"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label for="mileage">Mileage</Label>
                                    <Input
                                        type="number"
                                        name="mileage"
                                        placeholder="mileage placeholder"
                                        onChange={this.onChange}

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="fuelefficiency">Fuel Efficiency</Label>
                                    <Input
                                        type="number"
                                        name="fuelefficiency"
                                        placeholder="fuel efficiency placeholder"
                                        onChange={this.onChange}

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="manufacturedyear">Manufactured Year</Label>
                                    <Input
                                        type="date"
                                        name="manufacturedyear"
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

export default createbus;
