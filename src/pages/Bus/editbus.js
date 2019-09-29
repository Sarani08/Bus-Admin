import Page from 'components/Page';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
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
    Alert
} from 'reactstrap';
import firebase from '../Firebase';


class editbus extends Component {

    constructor(props) {
        super(props);


        this.state = {
            busregnumber: '',
            model: '',
            mileage: '',
            fuelefficiency: '',
            manufacturedyear: '',
            bname:'',
            bno:'',
            bprice:'',
            bseat:''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('buses').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            const bus = doc.data();
            this.setState({
              key: doc.id,
              busregnumber: bus.busregnumber,
            model: bus.model,
            mileage: bus.mileage,
            fuelefficiency:bus.fuelefficiency,
            manufacturedyear:bus.manufacturedyear,
            bname:bus.bname,
            bno:bus.bno,
            bprice:bus.bprice,
            bseat:bus.bseat
            });
          } else {
            console.log("No such document!");
          }
        });
      }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({bus:state});
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { busregnumber, model, mileage, fuelefficiency, manufacturedyear,bname,bno,bprice,bseat } = this.state;

        const updateRef = firebase.firestore().collection('buses').doc(this.state.key);
        updateRef.set({
            busregnumber,
            model,
            mileage,
            fuelefficiency,
            manufacturedyear,
            bname,
            bno,
            bprice,
            bseat
        })
        .then((docRef) => {
            this.setState({
            busregnumber: '',
            model: '',
            mileage: '',
            fuelefficiency: '',
            manufacturedyear: '',
            bname:'',
            bno:'',
            bprice:'',
            bseat:''
            });
            this.props.history.push("/viewbus")
        })
        .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }




render() {
    return (
        <Page title="Add Bus" breadcrumbs={[{ name: 'Add Bus', active: true }]}>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Bus</CardHeader>
                        <CardBody>
                            <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                    <Label for="busregnumber">Bus Reg Number</Label>
                                    <Input
                                        type="text"
                                        name="busregnumber"
                                        value={this.state.busregnumber}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="model">Model</Label>
                                    <Input
                                        type="text"
                                        name="model"
                                        placeholder="Enter model(toyota,nissan)"
                                        value={this.state.model}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label for="mileage">Mileage</Label>
                                    <Input
                                        type="number"
                                        name="mileage"
                                        placeholder="mileage placeholder"
                                        value={this.state.mileage}
                                        onChange={this.onChange}

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="fuelefficiency">Fuel Efficiency</Label>
                                    <Input
                                        type="number"
                                        name="fuelefficiency"
                                        placeholder="fuel efficiency placeholder"
                                        value={this.state.fuelefficiency}
                                        onChange={this.onChange}

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="manufacturedyear">Manufactured Year</Label>
                                    <Input
                                        type="date"
                                        name="manufacturedyear"
                                        value={this.state.manufacturedyear}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bname">Bus Name</Label>
                                    <Input
                                        type="text"
                                        name="bname"
                                        value={this.state.bname}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bno">Bus Route Number</Label>
                                    <Input
                                        type="number"
                                        name="bno"
                                        placeholder="Enter bus number(177,174)"
                                        value={this.state.bno}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label for="bseat">Number of seats</Label>
                                    <Input
                                        type="number"
                                        name="bseat"
                                        value={this.state.bseat}
                                        onChange={this.onChange}

                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="bprice">Ticket price</Label>
                                    <Input
                                        type="number"
                                        name="bprice"
                                        value={this.state.bprice}
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

export default editbus;
