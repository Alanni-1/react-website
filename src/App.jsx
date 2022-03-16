// Fragment 等同于空标签
import React, {Fragment} from 'react';
import BaseRouter from './route'
import './App.css';

function App() {
  return (
    <Fragment>
      <BaseRouter/>
    </Fragment>
  );
}

export default App;
