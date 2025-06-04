import { Button } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component{
  render(){
    return (
      <Link to="/dashboard/home">
        <Button>Login</Button>
      </Link>
    );
  }
};

export default LoginPage;