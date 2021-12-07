import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
    const id = props.match.params.id;

    const { userData } = props;

    const userInfo = userData.find(item => item.id == id);
    const [data, setData] = useState(userInfo);

    return (
        <div className="container">
            <h2>Contact Details</h2>
            <div className="card" style= {{width: '18rem'}}>
                <ul className="list-group">
                    <li className="list-group-item"><b>Id:</b> {id}</li>
                    <li className="list-group-item"><b>Name:</b> {data.name}</li>
                    <li className="list-group-item"><b>Username:</b> {data.username}</li>
                    <li className="list-group-item"><b>Email:</b> {data.email}</li>
                </ul>
            </div><br />
            <Link to= '/'><button className="btn btn-primary">Back to Contact List</button></Link>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userDetails
    }
}

export default connect(mapStateToProps)(UserDetails);
