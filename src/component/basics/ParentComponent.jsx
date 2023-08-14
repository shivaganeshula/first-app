import React, { useState } from 'react'

import ChildComponent from './ChildComponent'

let ParentComponent =() => {

    const [state, setState] = useState({
        channel: 'Ui Channel',
        author:''
    });

    let receivedData = (data) => {
        setState(() => ({
            ...state,
            author:data
        }));
    };

  return (
    <React.Fragment>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-body bg-success text-white">
                            <p className="h4">Welcome to Parent Component</p>
                            <p>ssebdhd : {state.author}</p>
                            <ChildComponent channel={state.channel} receivedData={receivedData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ParentComponent