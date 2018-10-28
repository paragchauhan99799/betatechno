import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import { Router, Route, browserHistory } from 'react-router';

import AOS from 'aos';
import './css/aos.css'; 
// import './css/normalize.css'; 
// import './css/demo.css';
import './css/set1.css';

AOS.init();

ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={Home}/>
     </Router>,
    document.getElementById('root'));