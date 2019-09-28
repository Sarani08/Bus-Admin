import Page from 'components/Page';
import React, {Component} from 'react';
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


class createtimetable extends Component {

    constructor() {
        super();

        this.ref = firebase.firestore().collection('timetables');

        this.state = {
            traveldate: '',
            traveltime: '',
            boardinggate: ''

                };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { traveldate, traveltime, boardinggate} = this.state;

        this.ref.add({
            traveldate,
            traveltime,
            boardinggate
        }).then((docRef) => {
            this.setState({
                traveldate: '',
                traveltime: '',
                boardinggate: ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }



render() {
    return (
        <Page title="Add Timetable" breadcrumbs={[{ name: 'Add Timetable', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Timetable</CardHeader>
                        <CardBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label for="traveldate">Travel Date</Label>
                                    <Input
                                        type="date"
                                        name="traveldate"
                                        onChange={this.onChange}

                                     />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="traveltime">Travel Time</Label>
                                    <Input
                                        type="time"
                                        name="traveltime"
                                        onChange={this.onChange}

                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="boardinggate">Boarding Gate</Label>
                                    <Input
                                        type="text"
                                        name="boardinggate"
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

export default createtimetable;
