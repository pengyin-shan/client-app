import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './custom.scss';

import {Container, Image} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

window.addEventListener("load", function(){
  console.log('here');
  let tt = setTimeout(function(){
    document.getElementById('loading').style.display="none";
    document.getElementById('secondary').removeAttribute('hidden');
  },2000);
  //clearTimeout(tt);
});

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <div className="row">
        <div className="jumbotron">
          <h1 className="display-4">Hello, lawyer!</h1>
          <p className="lead">The DAPP to verify the ownership</p>
          <hr className="my-4"/>
          <p>We make life easier</p>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col">
                <Image id="loading" src="./807.gif"/>
            </div>
        </div>
        <div className="row justify-content-around">
            <div className="col">
              <Image src="./oc.png" id="secondary" hidden/>
            </div>
        </div>
      </div>
      <div className="row">
        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3">
            <a className="text-dark" href="https://ethtoronto.ca">ETHToronto Competition</a>
          </div>
        </footer>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
