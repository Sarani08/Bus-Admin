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

const createstation = () => {
    return (
        <Page title="Add Station" breadcrumbs={[{ name: 'Add Station', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Station</CardHeader>
                        <CardBody>
                            <Form>
                            <FormGroup>
                                    <Label for="stationname">Station Name</Label>
                                    <Input
                                        type="text"
                                        name="stationname"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input
                                        type="text"
                                        name="location"
                                        placeholder="Enter location"
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

export default createstation;
