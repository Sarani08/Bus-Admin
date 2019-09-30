import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Table } from 'reactstrap';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class viewstation extends Component {


  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('stations');
    this.unsubscribe = null;
    this.state = {
      stations: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const stations = [];
    querySnapshot.forEach((doc) => {
      const { stationname, location } = doc.data();

      stations.push({
        key: doc.id,
        stationname,
        location
      });
    });
    this.setState({
      stations
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(id) {
    firebase.firestore().collection('stations').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      alert('Station Deleted Successfully');
      this.props.history.push("/viewstation")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  
  generatePdf() {
  
    var doc = new jsPDF('p', 'pt');
    var res = doc.autoTableHtmlToJson(document.getElementById("station-table"));

    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle('normal');
      doc.text("Stations Report", data.settings.margin.left, 40);
    };

    var options = {
      margin: {
        top: 80
      }, 
      beforePageContent: header,

      startY: doc.autoTableEndPosY() + 60
    };
  
    doc.autoTable(res.columns, res.data, options);
  
    doc.save("stationreport.pdf");

}

  render() {
    return (
      <Page
        title="View Station"
        breadcrumbs={[{ name: 'View Station', active: true }]}
        className="TablePage"
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Stations</CardHeader>
              <CardBody>
                <Table responsive id="station-table">
                  <thead>
                    <tr>
                      <th id ="01">Station ID</th>
                      <th>Station Name</th>
                      <th>Location</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.stations.map(station =>
                      <tr>
                        <td>{station.key}</td>
                        <td>{station.stationname}</td>
                        <td>{station.location}</td>
                        <td><Link to={`/editstation/${station.key}`} class="btn btn-success">Edit</Link></td>
                        <td><button onClick={this.delete.bind(this, station.key)} class="btn btn-danger">Delete</button></td>
                      </tr>
                    )}
                  </tbody>
                </Table>

              </CardBody>
              <Button color="warning" onClick={() => this.generatePdf()}>Export(pdf)</Button>
            </Card>
          </Col>
        </Row>


      </Page>
    );
  }
}

export default viewstation;
