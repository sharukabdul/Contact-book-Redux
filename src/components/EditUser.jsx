import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import '../css/Style.css';

const EditUser = (props) => {
    let history = useHistory();
    const id = props.match.params.id;

    const { editName, userData } = props;

    const userInfo = userData.find(item => item.id == id);
    const [data, setData] = useState(userInfo);

    const { name, username, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editName({id, data});
        history.push('/');
    }

    console.log(userData, 'userData');
    return (
        <div className= "container mt-3">
            <h3>Edit Contact</h3>
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
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editName: val => dispatch({ type: 'EDIT_NAME', payload: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
