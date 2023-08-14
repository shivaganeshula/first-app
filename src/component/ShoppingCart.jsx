import React,{useState} from 'react'

const ShoppingCart = () => {

    const [state, setState] = useState({
        products :[
             {
            sno: 'A1455',
            image:'https://tse1.explicit.bing.net/th?id=OIP.6XoHINO6UrgMSf4hSX-AWQHaHa&pid=Api&P=0&h=180',
            name: 'Boat Watch',
            price: '1500',
            qty: 1
        },
        {
            sno: 'A1456',
            image:'https://tse2.mm.bing.net/th?id=OIP.zrfwB1tdmR84LNxGfFmDkgHaHa&pid=Api&P=0&h=180',
            name: 'Samsung Watch',
            price: '2300',
            qty: 2
        },
        {
            sno: 'A1457',
            image:'https://tse1.mm.bing.net/th?id=OIP.SBCfjuQqHzkOxOy8r-VrbgHaIy&pid=Api&P=0&h=180',
            name: 'Mi Watch',
            price: '1300',
            qty: 4
        },
        {
            sno: 'A1458',
            image:'https://tse1.mm.bing.net/th?id=OIP.VjU9EEAkdw6iuUIV73Gi9wHaIc&pid=Api&P=0&h=180',
            name: 'Realme Watch',
            price: '1900',
            qty: 3
        },
        {
            sno: 'A1459',
            image:'https://tse3.mm.bing.net/th?id=OIP.uMmJvI4I2B1w9Z80ThC-wwHaHa&pid=Api&P=0&h=180',
            name: 'Apple Watch',
            price: '15000',
            qty: 2
        },
    ]
    });

    const {products} = state;
const increment = (productId) => {
    let items = products.map(value => {
        if (value.sno === productId) {
            return {
                ...value,
                qty: value.qty+1
            }
        }
        return value

    });
    setState(() => ({
        products:[...items]
    }))
}

const decrement = (productId) => {
    let items = products.map(value => {
        if (value.sno === productId) {
            return {
                ...value,
                qty:value.qty - 1 > 0 ? value.qty -1 : 1
            }
        }
        return value
    });
    setState(() => ({
        products:[...items]
    }))
}

let grandTotal = () => {
    let total = 0
    for (let product of products){
        total += product.price * product.qty
    }

    return total;
}


    return (
        <>
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
                                {
                                    products.map((value) => (
                                        <tr key={value.sno}>
                                            <td>{value.sno}</td>
                                            <td><img src={value.image} alt={value.image} width={50} height={50}/></td>
                                            <td>{value.name}</td>
                                            <td>{value.price}</td>
                                            <td>
                                                <i onClick={() => decrement(value.sno)}  className='fa fa-minus-square mx-1'/>
                                                {value.qty}
                                                <i onClick={() => increment(value.sno)} className='fa fa-plus-square mx-1'/>
                                                </td>
                                            <td>{(value.price * value.qty).toFixed(2)}</td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={4}></td>
                                    <td>Grand Total:</td>
                                    <td>{grandTotal().toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart