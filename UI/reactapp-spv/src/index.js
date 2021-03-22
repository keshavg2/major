	import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TransactionList from './TransactionList/TransactionList.js';
import Transaction from './TransactionDetails/Transaction.js';
import Main from'./Main/Main.js';
import Home from'./Main/Home.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SPVCreateTransaction from './SPV/SPVCreateTransaction';
import SPVAddTransaction from './SPV/SPVAddTransaction';
import LandIdCreate from './LandIdCreate/LandIdCreate';
import Register from './Register/Register';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

 ReactDOM.render(
	<BrowserRouter>
 		<Switch>
        <Route  exact path='/Home' component ={Home}/>
        <Route  exact path='/App' component ={App}/>
        <Route path ='/Trans' component ={Transaction} />
        <Route path ='/SPVCreateTransaction' component ={SPVCreateTransaction} />
        <Route path ='/SPVAddTransaction' component ={SPVAddTransaction} />
        <Route path ='/LandIdCreate' component ={LandIdCreate} />
        <Route path ='/' component={Register}/>
        <Route path='/Login' component={Login}/>
 		</Switch>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
