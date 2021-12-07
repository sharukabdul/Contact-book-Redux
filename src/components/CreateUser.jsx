import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../css/Style.css';

const CreateUser = (props) => {

    const { addDetails } = props;

    const [data, setData] = useState({
        name: '',
        username: '',
        email: ''
    });

    const { name, username, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDetails(data);
        props.history.push('/');
    }

    return (
        <div className= "container mt-3">
            <h3>Create Contact</h3>
            <form onSubmit= {handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name<span className="red">*</span></label>
                    <input type="text" className="form-control" name= "name" value= {name} onChange= {handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Username<span className="red">*</span></label>
                    <input type="text" className="form-control" name= "username" value= {username} onChange= {handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email<span className="red">*</span></label>
                    <input type="email" className="form-control" name= "email" value= {email} onChange= {handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addDetails: val => dispatch({ type: 'ADD_USER', payload: val })
    }
}

export default connect(null, mapDispatchToProps)(CreateUser);
