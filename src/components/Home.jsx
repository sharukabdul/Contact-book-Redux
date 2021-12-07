import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import UserDetails from './UserDetails';

const Home = (props) => {

    const { userInfo } = props;

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            userInfo(res.data);
        });
    }, []);

    return (
        <div>
           <BrowserRouter>
            <Switch>
                <Route exact path= '/' component= {UserList} />
                <Route path= '/createuser' component= {CreateUser} />
                <Route path= '/edituser/:id' component= {EditUser} />
                <Route path= '/userdetails/:id' component= {UserDetails} />
            </Switch>
           </BrowserRouter>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        userInfo: val => dispatch({ type: 'USER_INFO', payload: val })
    }
}

export default connect(null, mapDispatchToProps)(Home);
