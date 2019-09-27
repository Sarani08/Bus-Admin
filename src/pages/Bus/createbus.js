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

const createbus = () => {
    return (
        <Page title="Add Bus" breadcrumbs={[{ name: 'Add Bus', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Bus</CardHeader>
                        <CardBody>
                            <Form>
                            <FormGroup>
                                    <Label for="busregnumber">Bus Reg Number</Label>
                                    <Input
                                        type="text"
                                        name="busregnumber"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="model">Model</Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Enter model(toyota,nissan)"
                                    />
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label for="mileage">Mileage</Label>
                                    <Input
                                        type="number"
                                        name="mileage"
                                        placeholder="mileage placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="fuelefficiency">Fuel Efficiency</Label>
                                    <Input
                                        type="number"
                                        name="fuelefficiency"
                                        placeholder="fuel efficiency placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="manufacturedyear">Manufactured Year</Label>
                                    <Input
                                        type="date"
                                        name="manufacturedyear"
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

export default createbus;
