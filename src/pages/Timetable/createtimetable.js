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
                        <CardHeader>Input Types</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Plain Text (Static)</Label>
                                    <Input
                                        plaintext
                                        value="Some plain text/ static value"
                                        readOnly
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="with a placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="password placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleUrl">Url</Label>
                                    <Input
                                        type="url"
                                        name="url"
                                        id="exampleUrl"
                                        placeholder="url placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleNumber">Number</Label>
                                    <Input
                                        type="number"
                                        name="number"
                                        id="exampleNumber"
                                        placeholder="number placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDatetime">Datetime</Label>
                                    <Input
                                        type="datetime"
                                        name="datetime"
                                        id="exampleDatetime"
                                        placeholder="datetime placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDate">Date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="date placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleTime">Time</Label>
                                    <Input
                                        type="time"
                                        name="time"
                                        id="exampleTime"
                                        placeholder="time placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleColor">Color</Label>
                                    <Input
                                        type="color"
                                        name="color"
                                        id="exampleColor"
                                        placeholder="color placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSearch">Search</Label>
                                    <Input
                                        type="search"
                                        name="search"
                                        id="exampleSearch"
                                        placeholder="search placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input type="select" name="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Select Multiple</Label>
                                    <Input type="select" name="selectMulti" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" />
                                    <FormText color="muted">
                                        This is some placeholder block-level help text for the above
                                        input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" /> Option one is this and that—be sure
                                        to include why it's great
                  </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" /> Check me out
                  </Label>
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
