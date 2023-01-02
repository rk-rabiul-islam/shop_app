import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, getSingleProduct } from '../../redux/product/action';
import SingleProduct from '../Shop/SingleProduct';
import './Product.css';
import swal from 'sweetalert';

const Product = () => {

    const { products } = useSelector( state => state.product);

    const dispatch = useDispatch();
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {
        dispatch(getSingleProduct(id))
        setSingle(true)
    };
    
    const handleSingleHide = () => setSingle(false);

    // handle delete Product 
    const handleProductDelete = (e, id) => {
        e.preventDefault();

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteProduct(id))
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!",{
                icon: "success",
              });
            }
          });

    }

    


  return (
    <div className='container my-5'>
        <SingleProduct single={  single } handleSingleHide =  { handleSingleHide }  />
        <div className="row justify-content-center">
            <div className="col-md-10">
            <Link className='btn btn-primary' to="/admin/product/create">Add new</Link> &nbsp;
            <Link className='btn btn-warning' to="/">View Shop</Link>
                <br />
                <br />
                <div className="card product shadow-sm">
                    <div className="card-body">
                    <h2>All products</h2>
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular Price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products && products.map( (data, index) =>
                                    <tr>
                                        <td>{index +1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.reg_price}</td>
                                        <td>{data.sale_price}</td>
                                        <td>{data.stock}</td>
                                        <td><img src={`http://localhost:5050/images/products/${data.photo}`} alt="" /></td>
                                        <td>
                                            <a className='text-info' onClick={() => handleSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                            <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                            <a className='text-danger' onClick={ (e) => handleProductDelete(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Product;