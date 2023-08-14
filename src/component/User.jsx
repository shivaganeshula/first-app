import React,{useState} from 'react'

const User = () =>  {

    const [state, setState] = useState({
        userName:'',
    });

  return (
    <>
    <div className="conatainer mt-3">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <p className='h4'>User Name</p>
                    </div>
                    <div className="card-body bg-light">
                        <form>
                            <div className="mb-3">
                                <input onChange={(event) => setState({userName:event.target.value})} value={state.userName} type='text' className='from-control'/>
                                <h4>{state.userName}</h4>
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
export default User