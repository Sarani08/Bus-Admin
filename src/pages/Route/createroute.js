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

const createroute = () => {
    return (
        <Page title="Add Route" breadcrumbs={[{ name: 'Add Route', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Route</CardHeader>
                        <CardBody>
                            <Form>
                            <FormGroup>
                                    <Label for="routename">Route Name</Label>
                                    <Input
                                        type="text"
                                        name="routename"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="startstation">Start Station</Label>
                                    <Input
                                        type="text"
                                        name="startstation"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="finalstation">Final Station</Label>
                                    <Input
                                        type="text"
                                        name="finalstation"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="distance">Distance</Label>
                                    <Input
                                        type="number"
                                        name="distance"
                                    />
                                </FormGroup>
                                 <FormGroup>
                                    <Label for="avgtraveltime">Average Travel Time</Label>
                                    <Input
                                        type="time"
                                        name="avgtraveltime"
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

export default createroute;
