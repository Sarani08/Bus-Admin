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


class editdriver extends Component {

    constructor(props) {
        super(props);


        this.state = {
            licensenumber: '',
            fullname: '',
            age: '',
            gender: ''
        };
    }


    componentDidMount() {
        const ref = firebase.firestore().collection('drivers').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const driver = doc.data();
                this.setState({
                    key: doc.id,
                    licensenumber: driver.licensenumber,
                    fullname: driver.fullname,
                    age: driver.age,
                    gender: driver.gender

                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({driver:state});
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { licensenumber, fullname, age, gender } = this.state;

        const updateRef = firebase.firestore().collection('drivers').doc(this.state.key);
        updateRef.set({
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
                                            value={this.state.licensenumber}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="fullname">Full Name</Label>
                                        <Input
                                            type="text"
                                            name="fullname"
                                            placeholder="Enter full name"
                                            value={this.state.fullname}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="age">Age</Label>
                                        <Input
                                            type="number"
                                            name="age"
                                            value={this.state.age}
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

export default editdriver;
