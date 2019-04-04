import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Hello from "./Hello";
import Info from "./Info";

    class App extends PureComponent {

     // App componentinin state'i
    state = {
        isVİsible : true

    }

    // Props olarak göndereceğimiz arrow function.
    changeVisible = () => {

            this.setState(function (prevState) {

                return {

                    isVisible :!prevState.isVisible
                }

            });

    }


    render() {
        return (
            <div>


                <Hello action = {this.changeVisible} />


                      <Info />





            </div>
        );
    }
}


export default App;