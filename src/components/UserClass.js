import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('child '+ props.name + ' constructor');
    // console.log(props);
  }
  componentDidMount() {
    console.log('child ' + this.props.name + ' did mount');
  }
  render() {
    console.log('child ' + this.props.name + ' render');
    return (
      <>
        <div>UserClass {this.props.name} Component</div>
      </>
    );
  }
}

export default UserClass;
