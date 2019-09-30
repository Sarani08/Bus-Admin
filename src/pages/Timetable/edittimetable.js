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


class edittimetable extends Component {

    constructor(props) {
        super(props);

      //  this.ref = firebase.firestore().collection('timetables');

        this.state = {
            traveldate: '',
            traveltime: '',
            boardinggate: ''

                };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('timetables').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const timetable = doc.data();
                this.setState({
                    key: doc.id,
                    traveldate: timetable.traveldate,
                    traveltime: timetable.traveltime,
                    boardinggate: timetable.boardinggate       

                });
            } else {
                console.log("No such document!");
            }
        });
    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { traveldate, traveltime, boardinggate} = this.state;

        const updateRef = firebase.firestore().collection('timetables').doc(this.state.key);
        updateRef.set({
            traveldate,
            traveltime,
            boardinggate
        }).then((docRef) => {
            this.setState({
                traveldate: '',
                traveltime: '',
                boardinggate: ''
            });
            alert('Timetable Edited Successfully');
            this.props.history.push("/viewtimetable")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }



render() {
    return (
        <Page title="Edit Timetable" breadcrumbs={[{ name: 'Edit Timetable', active: true }]}>
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
                                        value={this.state.traveldate}
                                        onChange={this.onChange}

                                     />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="traveltime">Travel Time</Label>
                                    <Input
                                        type="time"
                                        name="traveltime"
                                        value={this.state.traveltime}
                                        onChange={this.onChange}

                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="boardinggate">Boarding Gate</Label>
                                    <Input
                                        type="text"
                                        name="boardinggate"
                                        value={this.state.boardinggate}
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


export default edittimetable;
