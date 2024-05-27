import React from 'react';
import './App.css';
import Product from "./Product"
import image from '../image/1.jpg';
import image1 from '../image/2.jpg';
import image2 from '../image/3.jpg';
import image3 from '../image/4.jpg';


const shiraz = () => {
  return (
    <>
    <div className='mainad'>
      <Product titelname="میزناهارخوری ۴نفره" sumerytext="از لحاظ استقامتی محکم و سالمه"  image={image1} city="شیراز" price={7752}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک"   city="شیراز" price={195540}/>
      <Product titelname="ملکه زنبور عسل" sumerytext="تولید ملکه باکره از بهترین لاین موجود در ایستگاه پرورش ملکه"  image={image2} city="شیراز" price={3500012}/>
      <Product titelname="قاب عکس/نمایندگی/کارگاه قابسازی" sumerytext="سلام کاملا سالم بدون تشک"  image={image3} city="شیراز" price={450012}/>

    </div>
    <div className='mainad'>
      <Product titelname="میزناهارخوری ۴نفره" sumerytext="از لحاظ استقامتی محکم و سالمه"  image={image} city="شیراز" price={724500}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک"   city="شیراز" price={324560}/>
      <Product titelname="ملکه زنبور عسل" sumerytext="تولید ملکه باکره از بهترین لاین موجود در ایستگاه پرورش ملکه"  image={image2} city="شیراز" price={72000}/>
      <Product titelname="قاب عکس/نمایندگی/کارگاه قابسازی" sumerytext="سلام کاملا سالم بدون تشک"  image={image3} city="شیراز" price={647500}/>

    </div>
    <div className='mainad'>
      <Product titelname="میزناهارخوری ۴نفره" sumerytext="از لحاظ استقامتی محکم و سالمه"  image={image} city="شیراز" price={965500}/>
      <Product titelname="تخت تک‌ نفره فرفوژه" sumerytext="سلام کاملا سالم بدون تشک"   city="شیراز" price={45650}/>
      <Product titelname="ملکه زنبور عسل" sumerytext="تولید ملکه باکره از بهترین لاین موجود در ایستگاه پرورش ملکه"  image={image2} city="شیراز" price={804530}/>
      <Product titelname="قاب عکس/نمایندگی/کارگاه قابسازی" sumerytext="سلام کاملا سالم بدون تشک"  image={image3} city="شیراز" price={2042100}/>

    </div>
   
     
      
      



    </>
  )
};
export default shiraz;