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


class createdriver extends Component {

    constructor() {
        super();

        this.ref = firebase.firestore().collection('drivers');

        this.state = {
            licensenumber: '',
            fullname: '',
            age: '',
            gender: ''
        };
    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { licensenumber, fullname, age, gender } = this.state;

        this.ref.add({
            licensenumber,
            fullname,
            age,
            gender
        }).then((docRef) => {
            this.setState({
                licensenumber: '',
                fullname: '',
                age: '',
                gender: ''
            });
            alert('Driver Added Successfully');
            this.props.history.push("/viewdriver")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }


    render() {
        const { licensenumber, fullname, age, gender } = this.state;
        return (
            <Page title="Add Driver" breadcrumbs={[{ name: 'Add Driver', active: true }]}>
                <Row>
                    <Col xl={6} lg={12} md={12}>
                        <Card>
                            <CardHeader>Driver</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.onSubmit}>
                                    <FormGroup>
                                        <Label for="licensenumber">License Number</Label>
                                        <Input
                                            type="text"
                                            name="licensenumber"
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fullname">Full Name</Label>
                                        <Input
                                            type="text"
                                            name="fullname"
                                            placeholder="Enter full name"
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="age">Age</Label>
                                        <Input
                                            type="number"
                                            name="age"
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup tag="fieldset" row>
                                        <Label for="gender" sm={2}>
                                            Gender
                  </Label>
                                        <Col sm={10}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="male"
                                                    /> Male
                      </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="female"
                                                    /> Female
                      </Label>
                                            </FormGroup>
                                            <FormGroup check disabled>
                                                <Label check>
                                                    <Input type="radio" name="other"
                                                    /> Other
                      </Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button type="submit" >Submit</Button>
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

export default createdriver;
