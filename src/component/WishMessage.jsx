import React,{useState} from 'react'

let WishMessage =()=> {
    const[state, setState] = useState({
        message:'Hello'
    });

    let sayGoodMorning = () => {
        setState((state) => ({
            message: 'Good Morning'
        }));
    }

    let sayGoodAfternoon = () => {
        setState((state) =>({
            message:'Good Afternoon'
        }));
    }

    
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        <p className='h4'>Wish Message</p>
                    </div>
                    <div className="card-body">
                        <h5 className='display-3'>{state.message}</h5>
                        <button className='btn btn-success' onClick={sayGoodMorning}>Good Morning</button>
                        <button className='btn btn-warning' onClick={sayGoodAfternoon}>Good Afternoon</button>
                        <button className='btn btn-danger' onClick={()=>setState({message:'bbbbb'})}>Good Evening</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default WishMessage
