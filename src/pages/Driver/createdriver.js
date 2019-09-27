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

const createdriver = () => {
    return (
        <Page title="Add Driver" breadcrumbs={[{ name: 'Add Driver', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Driver</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="licensenumber">License Number</Label>
                                    <Input
                                        type="text"
                                        name="licensenumber"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="fullname">Full Name</Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Enter full name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleNumber">Age</Label>
                                    <Input
                                        type="number"
                                        name="number"
                                        id="exampleNumber"
                                        placeholder="number placeholder"
                                    />
                                </FormGroup>
                                <FormGroup tag="fieldset" row>
                                    <Label for="gender" sm={2}>
                                        Gender
                  </Label>
                                    <Col sm={10}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="male" /> Male
                      </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="female" /> Female
                      </Label>
                                        </FormGroup>
                                        <FormGroup check disabled>
                                            <Label check>
                                                <Input type="radio" name="other" /> Other
                      </Label>
                                        </FormGroup>
                                    </Col>
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

export default createdriver;
