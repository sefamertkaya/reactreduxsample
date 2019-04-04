import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
class Info extends Component {

  state = {

    isVisible : true,
    content : <div><h1>content is visible</h1></div>,

}



  render() {
   /* const links = this.props.links.map(
      link => this.makeLink(link)
    );*/

    return (
    <div>
      {this.props.isVisible ?
          <div><h1>visible</h1></div>
       :<div><h1></h1></div>
        }
    </div>

    );
  }

  makeLink(link) {
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
      </li>
    );
  }
}
const mapStateToProps=(state) => {
  return {
    isVisible:state.isVisible
  }
}


export default connect(mapStateToProps,null)(Info);


/*
export default InfoContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);*/
