import React,{useState} from 'react'

let AuthUser =() =>{
    const [state, setState] = useState({
        isLoggedIn: false,
    })
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-3">
                <div className="card shadow-lg">
                    <div className="card-body">
                        {
                            state.isLoggedIn ?  <p className='h4'>Welcome MR.SHIVA!</p>: <p className='h4'>Welcome Guests!</p>

                        }
                        {
                            state.isLoggedIn ? <button className='btn btn-warning btn-sm' onClick={() => setState({isLoggedIn:false})}>Logout</button> : <button className='btn btn-success btn-sm' onClick={() => setState({isLoggedIn:true})}>Login</button>
                        }
                        
                        
                       

                    </div>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default AuthUser
