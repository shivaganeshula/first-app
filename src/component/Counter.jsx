import React,{useState} from 'react'

let Counter =()=> {
    const [state, setState] = useState('');
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <p className="h4">Counter</p>
                    </div>
                    <div className="card-body">
                        <h3 className="display-3">{state}</h3>
                        {/* <button className='btn btn-success btn-sm' onClick={()=> setState(state+1)}>Increment</button>
                        <button className='btn btn-warning btn-sm' onClick={()=> setState(state-1)}>Decrement</button> */}
                   <input value ={state} type="text" onChange={(event) =>setState(event.target.value)}/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
export default Counter
