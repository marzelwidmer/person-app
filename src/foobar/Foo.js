import React, { Component } from 'react';
import { Alert } from 'reactstrap';
// import { Button } from 'reactstrap';
// class Foo extends Component {
//     render() {
//         return (
//             <div>
//             <Button color="danger">Danger!</Button>
//             <Button color="warning">Warning!</Button>
//             <Button color="info">Info!</Button>
//             </div>
//         );
//     }
// }
// export default Foo;

const Foo = (props) => {
    return (
        <div>
        <Alert color="primary">
          This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="secondary">
          This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="success">
          This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="danger">
          This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="warning">
          This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="info">
          This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="light">
          This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert color="dark">
          This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
      </div>
    );
  };
  
  export default Foo;