import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import {useDispatch} from 'react-redux';
import { createProduct } from '../../redux/product/action';

const CreateProduct = () => {

  const dispatch = useDispatch();


  // form Input State work
    const [input, setInput] = useState({
        name    : "",
        reg_price : "",
        sale_price : "",
        stock   : "",
        category : [],
        tags     : [],
        slug    : [],
        brand   : [],
        short_desc : "",
        long_desc : "",
        rating  : "",
        file    : "",
        photo   : "",
        gallery : []
    });

    // Handle input change
    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    // handle catagory work
    const handleCatagory = (e) => {

      if(e.target.checked){

        let cats = input.category
        cats.push(e.target.value);
        setInput((prevState) => ({
          ...prevState,
          category : cats
        }))

      }else{

        let cats = input.category
        const newCats = cats.filter( data => data !== e.target.value);
        setInput((prevState) => ({
          ...prevState,
          category : newCats
        }))
      }

    }
    // handle tags work
    const handleTags = (e) => {

      if(e.target.checked){

        let tags = input.tags
        tags.push(e.target.value);
        setInput((prevState) => ({
          ...prevState,
          tags : tags
        }))

      }else{

        let tags = input.tags
        const newTags = tags.filter( data => data !== e.target.value);
        setInput((prevState) => ({
          ...prevState,
          tags : newTags
        }))
      }
    }

    // heandle product Photo
    const handleFeaturePhoto = (e) => {

      setInput((prevState) => ({
        ...prevState,
        file : e.target.files[0]
      }));

    }

    // handle Product Gallery photo
    const handleProductGallery = (e) => {

      setInput((prevState) => ({
        ...prevState,
        gallery : e.target.files
      }));

    }
    

    const handleProductSubmit = async (e) => {
      e.preventDefault();

      const data = new FormData();
      data.append('name', input.name);
      data.append('reg_price', input.reg_price);
      data.append('sale_price', input.sale_price);
      data.append('stock', input.stock);
      data.append('category', input.category);
      data.append('tags', input.tags);
      data.append('photo', input.file);

      for( let i = 0; i < input.gallery.length ; i++){

        data.append('gallery', input.gallery[i]);
      }


      if( !input.name || !input.reg_price || !input.stock || !input.category || !input.tags){

        swal("BAD JOB!", "All Fields are required", "warning");
      }else{

        dispatch(createProduct(data));

        swal("Good job!", "Product Created SuccessFull!", "success");
   
        setInput({
          name    : "",
          reg_price : "",
          sale_price : "",
          stock   : "",
          photo   : "",
          gallery : ""
        })
        e.target.reset();

      }
    }




  return (
    <div className='container my-5'>
    <div className="row justify-content-center">
        <div className="col-md-5">
            <Link className='btn btn-primary' to="/admin/product">Back</Link>
            <br />
            <br />
            <div className="card product shadow-sm">
                <div className="card-body">
                <h2>Add new product</h2>
                <hr />
                <form onSubmit={ handleProductSubmit }>
                    <div className="my-3">
                        <label htmlFor="">Name</label>
                        <input className='form-control' type="text" name='name' value={input.name} onChange={handleInputChange} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Regular Price</label>
                        <input className='form-control' type="number" name='reg_price' value={input.reg_price} onChange={handleInputChange} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Sale Price</label>
                        <input className='form-control' type="number" name='sale_price' value={input.sale_price} onChange={handleInputChange} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Stock</label>
                        <input className='form-control' type="text" name='stock' value={input.stock} onChange={handleInputChange} />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Photo</label>
                        <input className='form-control' type="file" name='photo' onChange={ handleFeaturePhoto } />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">GALLERY</label>
                        <input className='form-control' type="file" name='gallery' onChange={ handleProductGallery } multiple/>
                    </div>

                    {/* Catagory Work Start heare */}
                    <div className="my-3">
                        <h4>Category</h4>
                        <hr />
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleCatagory} value="Men"/>
                            Men
                          </label>
                          <br />
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleCatagory} value="Women"/>
                            Women
                          </label>
                          <br />
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleCatagory} value="ELECTRONIC"/>
                            ELECTRONIC
                          </label>
                          <br />
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleCatagory} value="KIDS"/>
                            KIDS
                          </label>
                          <br />
                        </div>
                    </div>
                    {/* Catagory Work end heare */}

                    {/* Tags Work start heare */}
                    <div className="my-3">
                        <h4>Tags</h4>
                        <hr />
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleTags} value="EID"/>
                            EID
                          </label>
                          <br />
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleTags} value="PUJA"/>
                            PUJA
                          </label>
                          <br />
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={handleTags} value="DENGU"/>
                            DENGU
                          </label>
                          <br />
                        </div>
                    </div>
                    {/* Tags Work end heare */}


                    <div className="my-3">
                        <label htmlFor=""></label>
                        <input className='btn btn-primary w-100' type="submit"  value='Create'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default CreateProduct;