import React, { useState } from 'react'

let LoginForm = () => {

    let [state, setState] = useState({
        user: {
            username: '',
            password: ''

        }

    });

    const {user} = state

const changeInput = (event) => {
    setState(() => ({
        user:{
            ...state.user,
            [event.target.name]:event.target.value
        }
    }))
}

let onSubmitValue = (event) => {
    event.preventDefault();
    console.log(user)
}

    
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-success">
                                <p className='h4'>Login Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={onSubmitValue}>
                                    <div className="mb-3">
                                        <input name='username' value={user.username} onChange={changeInput} type="text" className='form-control' placeholder='UserName' />
                                    </div>
                                    <div className="mb-3">
                                        <input name="password" onChange={changeInput} value={user.password} type="password" className='form-control' placeholder='Password' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className='btn btn-success btn-sm' value='Login' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginForm