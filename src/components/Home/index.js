import React from 'react';
import { Jumbotron, Button, Container} from 'reactstrap';


import '../../assets/styles/common.css';
import me from '../../assets/images/me.png';


import github from '../../assets/images/github.png';
import codepen from '../../assets/images/codepen.png';


import Navigation from '../Navigation';


const HomePage = (props) => {
  return (
    <div>
      <Jumbotron fluid className="layout">
        <Container fluid className="container">
   			   <Jumbotron className="inner-layout">
       <Navigation/>
       <hr className="my-2" />
          <img src={me} alt="me" className="image hvr-bounce-in" />
          <h1 className="display-4"> React Study Guide</h1>
          <p className="lead">react • redux • react-redux • react-router • reactstrap </p>
          <hr className="my-2" />
          <p className="lead">
            <Button className="button-2 hvr-bounce-in" href="https://github.com/" color="primary" target="_blank" ><img src={github} alt="me" className="image-4 " /></Button> {' '}
            <Button className="button-2 hvr-bounce-in" href="https://codepen.io/" color="primary" target="_blank"><img src={codepen} alt="me" className="image-4 " /></Button> {' '}
          </p>
       </Jumbotron>     
        </Container>
      </Jumbotron>
    </div>
  );
};


export default HomePage;