import React from 'react';
import UserClass from '../components/UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor');
  }
  componentDidMount() {
    console.log('parent didmount');
    console.log(<UserClass />);
  }
  render() {
    console.log('Parent render');
    return (
      <>
        <div>About Page</div>
        <UserClass name="Rohit" />
        <UserClass name="Sachin" />
      </>
    );
  }
}

export default About;
