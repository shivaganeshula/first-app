import React, { useState } from 'react'

const ChildComponent =(props) => {

  const [state, setState] = useState({
    author:'Shiva'

  });

  let clickBtn = () => {

    props.receivedData(state.author)
  }

  return (
    <React.Fragment>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-body bg-warning">
                            <p className="h4">Welcome to Child Component</p>
                            <p className="h4">{props.channel}</p>
                            <button onClick={clickBtn} className='btn btn-dark btn-sm'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ChildComponent
