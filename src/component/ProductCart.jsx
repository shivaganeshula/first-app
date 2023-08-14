import React, { useState } from 'react'

import ProductServices from './services/ProductServices';

let ProductCart = () => {
    const [state, setState] = useState({
        products: ProductServices.getAllProducts()

    });


    let { products } = state;
    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-8'>
                        {
                            products.map((value) => {
                                return (
                                    <div className="card shadow-lg mt-3">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <img src={value.image} className='img-fluid'/>
                                                </div>
                                                <div className="col-md-6">
                                                    <h5 className='display-4'>{value.name}</h5>
                                                    <h6 className="display-6">&#8377;{value.price}.00</h6>
                                                    <h6 className="display-6">
                                                        {
                                                            value.qty >= 10 && <span className='text-success'>Available</span>
                                                        }
                                                        {
                                                            value.qty <= 10 && value.qty >=1 && <span className='text-warning'>Almost Out of stock</span>
                                                        }
                                                        {
                                                            value.qty === 0 && <span className='text-danger'>Out of Stack </span>
                                                        }
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </>
    )
}
export default ProductCart