import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../../redux/product/action';
import './Shop.css';
import SingleProduct from './SingleProduct';
import Skeleton from 'react-loading-skeleton';


const Shop = () => { 

    const dispatch = useDispatch();
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {
        dispatch(getSingleProduct(id))
        setSingle(true)
    };
    
    const handleSingleHide = () => setSingle(false);

    const { products, error, skeletonEffect } = useSelector( state => state.product);

 
  return (
    <>

       
        <SingleProduct single={  single } handleSingleHide =  { handleSingleHide }  />
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/">
                            <img src="https://i.etsystatic.com/9677300/r/il/edb9a9/1988747599/il_fullxfull.1988747599_4ory.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-list">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#">Blog</a></li>
                                <li><Link to="/">Shop</Link></li>
                                <li><Link to="/admin/product">Admin</Link></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container my-5 shop'>
            <div className="row">
                <div className="col-md-3">
                    <div className="widget">
                        <h2>Serch</h2>
                        <input className='form-control' type="text" />
                    </div>

                    <div className="widget">
                        <h2>Category</h2>
                        <ul className='list-group'>
                            <li className='list-group-item'><a href="#">Men</a></li>
                            <li className='list-group-item'><a href="#">Women</a></li>
                            <li className='list-group-item'><a href="#">Electronic</a></li>
                            <li className='list-group-item'><a href="#">Kids</a></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h2>Tags</h2>
                        <div className="tags">
                            <a href="#">Eid</a>
                            <a href="#">Puja</a>
                            <a href="#">Dengu</a>
                        </div>
                    </div>

                    <div className="widget my-2">
                        <h2>Price Search</h2>
                        <div className="search">
                            <input type="range" min={10} max={ 10000 } />
                            <input type="range" min={10} max={ 10000 } />
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row shop-area">
                        <h2>Our Products</h2>

                         {
                            skeletonEffect && ( 
                                <>
                                    <div className="col-md-4 shop-item mb-5">

                                        <div className="card">
                                            <div className="card-img">
                                                <Skeleton height={270}/>
                                            </div>
                                            <div className="card-body p-1">
                                                <Skeleton height={40} width='80%'/>
                                            </div>
                                            <div className="card-footer">
                                                <Skeleton height={20} width='60%'/>
                                                <Skeleton height={20} width='50%'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 shop-item mb-5">

                                        <div className="card">
                                            <div className="card-img">
                                                <Skeleton height={270}/>
                                            </div>
                                            <div className="card-body p-1">
                                                <Skeleton height={40} width='80%'/>
                                            </div>
                                            <div className="card-footer">
                                                <Skeleton height={20} width='60%'/>
                                                <Skeleton height={20} width='50%'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 shop-item mb-5">

                                        <div className="card">
                                            <div className="card-img">
                                                <Skeleton height={270}/>
                                            </div>
                                            <div className="card-body p-1">
                                                <Skeleton height={40} width='80%'/>
                                            </div>
                                            <div className="card-footer">
                                                <Skeleton height={20} width='60%'/>
                                                <Skeleton height={20} width='50%'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 shop-item mb-5">

                                        <div className="card">
                                            <div className="card-img">
                                                <Skeleton height={270}/>
                                            </div>
                                            <div className="card-body p-1">
                                                <Skeleton height={40} width='80%'/>
                                            </div>
                                            <div className="card-footer">
                                                <Skeleton height={20} width='60%'/>
                                                <Skeleton height={20} width='50%'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 shop-item mb-5">

                                        <div className="card">
                                            <div className="card-img">
                                                <Skeleton height={270}/>
                                            </div>
                                            <div className="card-body p-1">
                                                <Skeleton height={40} width='80%'/>
                                            </div>
                                            <div className="card-footer">
                                                <Skeleton height={20} width='60%'/>
                                                <Skeleton height={20} width='50%'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 shop-item mb-5">

                                        <div className="card">
                                            <div className="card-img">
                                                <Skeleton height={270}/>
                                            </div>
                                            <div className="card-body p-1">
                                                <Skeleton height={40} width='80%'/>
                                            </div>
                                            <div className="card-footer">
                                                <Skeleton height={20} width='60%'/>
                                                <Skeleton height={20} width='50%'/>
                                            </div>
                                        </div>
                                    </div>
                                </>
                             ) }

                        {
                            products && products.map((data, index) =>

                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <img className='card-img' src={`http://localhost:5050/images/products/${data.photo}`} alt="" />
                                        <div className="card-body">
                                            <h3>{data.name}</h3>                                
                                        </div>
                                        <div className="card-footer">
                                            <p>Price : $ {data.reg_price}</p>
                                            <button onClick={ () => handleSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>


    </>
  )
};

export default Shop;