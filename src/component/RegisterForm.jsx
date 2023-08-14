 import React,{useState} from 'react'

let RegisterForm = () => {
    const [state, SetState] = useState({
        user:{
            username:'',
            email:'',
            password:'',
            designation:'',
            bio:'',
            terms:false

        }
       
    });

    let {user} = state;

    const inputChange = event => {
        SetState(() => ({
            user: {
                ...state.user,
                [event.target.name]:event.target.value
            }
        }))
    }

    const updatedChecked = event => {
        SetState(() => ({
            user:{
                ...state.user,
                [event.target.name]:event.target.checked
            }
        }))
    }

    return (
        <>
        <prev>{JSON.stringify(state.user)}</prev>
        
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className='h4'>Register Form</p>
                            </div>
                            <div className="card-body bg-light">
                                <form>
                                    <div className="mb-3">
                                        <input name='username' value={user.username} onChange={inputChange} type='text' className='form-control' placeholder='Username' />
                                    </div>
                                    <div className='mb-3'>
                                        <input name='email' value={user.email} onChange={inputChange} type='email' className='form-control' placeholder='Email' />
                                    </div>
                                    <div className='mb-3'>
                                        <input name='password' value={user.password} onChange={inputChange} type='password' className='form-control' placeholder='Password' />
                                    </div>
                                    <div className='mb-3'>
                                        <select name='designation' value={user.designation} onChange={inputChange} className='form-control'>
                                            <option>Select Designation</option>
                                            <option value='Software Enginner'>Software Enginner</option>
                                            <option value=' Sr.Software Enginner'>Sr.Software Enginner</option>
                                            <option value='Tech Lead'>Tech Lead</option>
                                            <option value='Project Manager'>Project Manager</option>
                                            <option value='Director'>Director</option>
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <textarea name='bio' value={user.bio} onChange={inputChange} row={5} className='form-control' placeholder='Bio'/>
                                    </div>
                                    <div className='mb-3'>
                                        <input onChange={updatedChecked} type='checkbox' className='form-check-input'/> Accept Terms
                                    </div>
                                    <div className='mb-3'>
                                        <input type='button' className='btn btn-warning btn-sm' value='Register'/>

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

export default RegisterForm
