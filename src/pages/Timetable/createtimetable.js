import Page from 'components/Page';
import React from 'react';
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

const createtimetable = () => {
    return (
        <Page title="Add Timetable" breadcrumbs={[{ name: 'Add Timetable', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Timetable</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="traveldate">Travel Date</Label>
                                    <Input
                                        type="date"
                                        name="traveldate"
                                     />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="traveltime">Travel Time</Label>
                                    <Input
                                        type="time"
                                        name="traveltime"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="boardinggate">Boarding Gate</Label>
                                    <Input
                                        type="text"
                                        name="boardinggate"
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
};

export default createtimetable;
