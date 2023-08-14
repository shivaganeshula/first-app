import React,{useState} from 'react'

let Product = () => {
    const [state, setState] = useState({
        product : {
            sno: 'A1459',
            image:'https://tse1.explicit.bing.net/th?id=OIP.6XoHINO6UrgMSf4hSX-AWQHaHa&pid=Api&P=0&h=180',
            name: 'Boat Watch',
            price: '1500',
            qty: 3
        }
    });

    const {product} = state

    const increment = () => {
        setState(() => ({
            product:{
                ...state.product,
                qty:product.qty+1
            }
        }))
    }

    const decrement = () => {
        setState(() => ({
            product:{
                ...state.product,
                qty:product.qty-1 > 0 ? state.product.qty -1 : 1
            }
        }))
    }

    
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className='h3 text-success'>Product Item</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad voluptas perferendis commodi excepturi tempore, aut veniam cupiditate repellat reprehenderit reiciendis sit adipisci doloribus iste eum aliquam ex tenetur? Quidem.</p>
            </div>
        </div>
    </div>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <table className='table table-striped text-center table-hover'>
                    <thead>
                    <tr className='bg-dark text-white'>
                        <th>Sno</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.sno}</td>
                            <td><img src={product.image} alt={product.img} width={50} height={50}/></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <i onClick={decrement} className='fa fa-minus-square mx-1'/>
                                {product.qty}
                                <i onClick={increment} className='fa fa-plus-square mx-1'/>
                                </td>
                            <td>{product.price * product.qty}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>

    </div>
    </>
  )
}

export default Product