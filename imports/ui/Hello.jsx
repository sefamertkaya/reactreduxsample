import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleVisible } from '../actionCreator/hello';
 class Hello extends Component {

   state= {
     isVisible :true,
   }





     render() {
    return (
      <div>

        <Button onClick={this.props.toggleIsVisible}>Değiştir</Button>




      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
   return  {
     toggleIsVisible: function(){
       return dispatch(toggleVisible());
     }
   }

}

export default connect(null,mapDispatchToProps)(Hello);
