import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import hello from '../imports/reducers/hello';



Meteor.startup(() => {
  const store = createStore((hello), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  render(
      <Provider store={store}><App /></Provider>, document.getElementById('react-target'));
});
