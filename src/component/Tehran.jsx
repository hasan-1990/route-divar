import React from 'react';
import './App.css';
import Product from "../component/Product"
import image from '../image/1.jpg';
import image1 from '../image/2.jpg';
import image2 from '../image/3.jpg';
import image3 from '../image/4.jpg';



const Tehran = () => {
  return (
    <>
    <div className='mainad'>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image} city="تهران" price={50}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران"  city="تهران" price={1500} />
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image2} city="تهران" price={75050}/>
      <Product titelname="قاب عکس/نمایندگی/کارگاه قابسازی" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image3} city="تهران" price={150005}/>

    </div>
    <div className='mainad'>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران"  city="تهران" price={2000}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image1} city="تهران" price={3000}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image2} city="تهران" price={40050}/>
      <Product titelname="قاب عکس/نمایندگی/کارگاه قابسازی" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران"  city="تهران" price={45000}/>

    </div>
    <div className='mainad'>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image} city="تهران" price={12000}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران"  city="تهران" price={360000}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image2} city="تهران" price={925005}/>
      <Product titelname="قاب عکس/نمایندگی/کارگاه قابسازی" sumerytext="سلام کاملا سالم بدون تشک" endtext="تهران" image={image3} city="تهران" price={4736540}/>

    </div>
    
     
      
      



    </>
  )
};
export default Tehran;