import React, { useEffect, useState } from 'react'
import UserServices from './services/UserServices';

let UserList = () => {
    const [state, setState] = useState({
        user: []
    });

    useEffect(() => {
        UserServices.getAllUsers().then((respons) => {
            setState(() => ({
                user: respons.data
            }))

        }).catch((error) => {
            console.log(error)
        })

    }, []);

    const { user } = state;
    return (
        <>
        
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-success">User List</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto esse eligendi amet vero quam, quasi cum ratione nemo, excepturi earum eum nobis nam nihil accusamus laudantium consequatur? Earum, architecto.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-hover text-center table-striped'>
                            <thead className='bg-primary text-success'>
                                <tr>
                                    <th>SNO</th>
                                    <th>NAME</th>
                                    <th>Email</th>
                                    <th>Street</th>
                                    <th>City</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.length > 0 && user.map(users => (
                                        <tr>
                                            <td>{users.id}</td>
                                            <td>{users.name}</td>
                                            <td>{users.email}</td>
                                            <td>{users.address.street}</td>
                                            <td>{users.address.city}</td>
                                            <td>{users.website}</td>
                                        </tr>
                                    ))

                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList