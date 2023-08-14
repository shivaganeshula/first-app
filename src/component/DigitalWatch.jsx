import React, { useEffect, useState } from 'react'

let DigitalWatch =() =>{

    let[state, setState] = useState({
        currentTime: new Date().toLocaleTimeString()
    })

    useEffect(() => {
        let interval = setInterval(() => {
            setState(() =>({
                currentTime: new Date().toLocaleTimeString()
            }))

        },1000);

        return () => {
            clearInterval(interval)
        }

    },[])

  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="card shadow-sm">
                <div className="card-header bg-warning">
                    <p className="h4">Digital Watch</p>
                </div>
                <div className="card-body">
                    <h3 className='display-4'>{state.currentTime}</h3>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DigitalWatch