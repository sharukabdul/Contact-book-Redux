import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../css/Style.css';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const [search, setSearch] = useState('');

    const { userInfo, deleteName, deleteAll } = props;

    const handleDelete = (index) => {
        deleteName(index);
    }

    const handleDeleteAll = (index) => {
        if(window.confirm('Are you sure you want to delete all?')) {
            deleteAll(index);
        }
    }

    return (
        <div className= "container">
            <div className="mt-3">
                <h2>Contact Details</h2>
                <input style= {{width: '50%', display: 'inline-block'}} type="text" className="form-control" placeholder= "Search Employee" value= {search} onChange= {(e) => setSearch(e.target.value)} />&nbsp;&nbsp;
                <span>
                    <Link to='/createuser'>
                        <button style= {{marginTop: '-5px'}} className="btn btn-success">Create Contact</button>
                    </Link>&nbsp;&nbsp;
                    <button style= {{marginTop: '-5px'}} className="btn btn-danger" onClick= {() => handleDeleteAll()}>Delete All</button>
                </span>
            </div>
            <div className="mt-3">
                <table className="table shadow table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userInfo.filter(item => {
                            const name = item.name.toLowerCase().includes(search.toLowerCase());
                            const username = item.username.toLowerCase().includes(search.toLowerCase());
                            const email = item.email.toLowerCase().includes(search.toLowerCase());
                            return name || username || email;
                        }).map((item, index) => {
                            return (
                                <tr key= {index}>
                                    <td>{item.id}</td>
                                    <td><Avatar style= {{marginRight: '10px'}} name= {item.name} size="45" round= {true} />{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick= {() => handleDelete(item.id)}>Delete</button>
                                        <Link to= {`/edituser/${item.id}`}>
                                            <button style= {{margin: '10px'}} className="btn btn-primary">Edit</button>
                                        </Link>
                                        <Link to= {`/userdetails/${item.id}`}>
                                            <button className="btn btn-secondary">Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteName: val => dispatch({ type: 'DELETE_NAME', payload: val }),
        deleteAll: val => dispatch({ type: 'DELETE_ALL', payload: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
