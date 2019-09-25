import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { white } from 'material-ui/styles/colors';
import { black } from 'material-ui/styles/colors';



class home extends Component {
  render() {
    return (<div>
      <br /><br/>
      <h1 style={{textAlign :"center"}} class="text-light">Interesting stops in Sri Lanka</h1>
      <br/>
      <table cellPadding="5">
        <tr>
          <td>
            <Card border="primary" style={{ width: '18rem',color: black}}>
              <Card.Img variant="top" src="https://oddviser.com/photo/idea/1600/1530.jpg" />
              <Card.Body>
                <Card.Title>Nuwara Eliye</Card.Title>
                <Card.Text>
                  Often referred to as ‘Little England’, this genteel highland community does have a rose-tinted, vaguely British-country-village feel to it, with its colonial-era bungalows, Tudor-style hotels, well-tended hedgerows and pretty gardens
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Nuwara_Eliya" role="button">Read More</a>

              </Card.Body>
            </Card>
          </td>

          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="https://i.redd.it/tnsjxpbo2l321.jpg" />
              <Card.Body>
                <Card.Title>Kandy</Card.Title>
                <Card.Text>
                  Some days Kandy’s skies seem perpetually bruised, with stubborn mist clinging to the hills surrounding the city’s beautiful centrepiece lake.Here’s a city that looks good even when it’s raining.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Kandy" role="button">Read More</a>

              </Card.Body>
            </Card>
          </td>

          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="https://s-ec.bstatic.com/images/hotel/max1024x768/109/109896710.jpg" />
              <Card.Body>
                <Card.Title>Matara</Card.Title>
                <Card.Text>
                  Matara is a busy, booming and sprawling commercial town that owes almost nothing to tourism – which can make it a fascinating window on modern Sri Lankan life.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Matara,_Sri_Lanka" role="button">Read More</a>
              </Card.Body>
            </Card>
          </td>

          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="http://exploresrilanka.lk/wp-content/uploads/2014/09/06_fmt.jpg" />
              <Card.Body>
                <Card.Title>Jaffna</Card.Title>
                <Card.Text>
                  A bastion of Hindu tradition, art and creative culture, Jaffna welcomes visitors warmly. It’s intriguing, unimposing, slightly off the beaten path and a thoroughly rewarding place to discover Sri Lankan Tamil culture.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Jaffna" role="button">Read More</a>
              </Card.Body>
            </Card>
          </td>

        </tr>

        <tr></tr>

        <tr>
          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="https://media.gettyimages.com/photos/thuparamaya-picture-id148330979?s=2048x2048" />
              <Card.Body>
                <Card.Title>Anuradhapura</Card.Title>
                <Card.Text>
                  The ruins of Anuradhapura are one of South Asia’s most evocative sights. The sprawling complex contains a rich collection of archaeological and architectural wonders: enormous dagobas (brick stupas), ancient pools and crumbling temples, built during Anuradhapura’s thousand years of rule over Sri Lanka.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Anuradhapura" role="button">Read More</a>
              </Card.Body>
            </Card>
          </td>

          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="https://media.gettyimages.com/photos/taking-in-the-view-of-ella-sri-lanka-picture-id1031974966?s=2048x2048" />
              <Card.Body>
                <Card.Title>Elle</Card.Title>
                <Card.Text>
                  Welcome to everyone’s favourite hill-country village, and the place to ease off the travel accelerator with a few leisurely days resting in your choice of some of the country’s best guesthouses.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Ella,_Sri_Lanka" role="button">Read More</a>
              </Card.Body>
            </Card>
          </td>

          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="https://live.staticflickr.com/8167/7161700030_f8e7d073bf_b.jpg" />
              <Card.Body>
                <Card.Title>Kalutara</Card.Title>
                <Card.Text>
                  Nestled along secluded shores is the enchanting town of Kalutara, promising truly unforgettable Sri Lanka holidays. Rich culture, exotic adventures, thrilling water sports and palm-fringed golden beaches are all part of the many discoveries that lie in store.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Kalutara" role="button">Read More</a>
              </Card.Body>
            </Card>
          </td>

          <td>
            <Card border="primary" style={{ width: '18rem',color: black }}>
              <Card.Img variant="top" src="https://nerdnomads.com/wp-content/uploads/DSC81411.jpg" />
              <Card.Body>
                <Card.Title>Negombo</Card.Title>
                <Card.Text>
                  Negombo is a modest beach town located just 10km from Bandaranaike International Airport. With a stash of decent hotels and restaurants to suit all pockets, a friendly local community, an interesting old quarter and a reasonable (though somewhat polluted) beach, Negombo is a much easier place to find your Sri Lankan feet than Colombo.
            </Card.Text>
                <a class="btn btn-primary" href="https://en.wikipedia.org/wiki/Negombo" role="button">Read More</a>
              </Card.Body>
            </Card>
          </td>

        </tr>
      </table>

    </div>

    );
  }
}

export default home;