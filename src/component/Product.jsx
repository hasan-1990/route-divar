import React from 'react';
import './App.css';
import image2 from '../image/no-image.jpg';



const Product = ({titelname,sumerytext,city,image,price}) => {
  return (
  <>
    

    <div class="card mb-3 d-flex justify-content-center d-flex " style={{maxWidth: '350px'}}>
            <div class="row g-0">
              <div class="col-md-4 p-3">
                <img  src={image} class="img-fluid rounded-start  "   alt={image} />
              </div>
              <div class="col-md-8 ">
                <div class="card-body text-end">
                  <h6 class="card-title "> {titelname}</h6>
                  <p class="card-text"> {sumerytext} </p>
                  
                  <p class="card-text "><small class="text-body-secondary"> نام شهر {city}</small></p>
                  <p>قیمت: {price}</p>
                  
                </div>
              </div>
            </div>
          </div>
  </>
  );
}

Product.defaultProps = {
  image: image2,
}

export default Product;