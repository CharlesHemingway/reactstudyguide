import React from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem  } from 'reactstrap';

import Navigation from '../Navigation';
import '../../assets/styles/common.css';

const AboutPage = () => {

  return(
  	<div>
  <Jumbotron fluid className="layout">
        <Container fluid className="container">
      <Jumbotron className="inner-layout">
               <Navigation/>
               <hr className="my-2" />
			  <div>
     <h1>About Us </h1>
      <p className="lead">
        In volutpat bibendum metus, et aliquet ligula placerat a. Nulla ultricies, sem vitae consectetur facilisis, nisl sapien facilisis sapien, eget fermentum arcu nisi ut ante. Duis ultricies enim ac augue viverra hendrerit. Aliquam neque tellus, facilisis at euismod sit amet, posuere ut leo. Sed sollicitudin nulla a tempor vestibulum. Sed consectetur sed purus quis facilisis. Donec iaculis convallis ligula sit amet bibendum.
      </p> 
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ullamcorper mi. Etiam dapibus ante nec elit posuere, at tempus diam commodo. Curabitur magna lacus, pretium a posuere id, congue vitae mi. Proin suscipit massa enim, ac aliquam odio lobortis vestibulum. Curabitur finibus facilisis pulvinar. Mauris lacinia sollicitudin sem non euismod. Aenean eu nulla vel felis bibendum volutpat non sed elit. Nunc metus ipsum, porttitor sed ultrices eget, ornare non odio. Phasellus congue et tellus eu sollicitudin. Vivamus commodo viverra est, ut congue ipsum luctus et. Donec dictum ac massa quis lobortis. In hac habitasse platea dictumst. Fusce suscipit sodales augue, vitae consequat enim molestie et. Phasellus in sem ante. In rhoncus ligula vitae accumsan egestas.
      </p>
       
       </div>
    </Jumbotron>
        </Container>
      </Jumbotron>
    </div>
  );
}


export default AboutPage;