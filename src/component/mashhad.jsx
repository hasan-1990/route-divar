import React from 'react';
import './App.css';
import Product from "./Product"
import image from '../image/1.jpg';
import image1 from '../image/2.jpg';
import image2 from '../image/3.jpg';
import image3 from '../image/4.jpg';



const mashhad = () => {

  return (
    <>
    <div className='mainad'>
      <Product titelname="ساعت سالم ۳۰۰ تومن" sumerytext="ساعت سالم رنگ سبز "  image={image} city="مشهد" price={350014}/>
      <Product titelname="آپارتمان 130 متری قایم مقام" sumerytext="2واحدی کف موکت کابینت فلز اشپزخانه سبک قدیم"   city="مشهد" price={3200012}/>
      <Product titelname="باغ پسته شهرک بینالود" sumerytext="5 ساعت آب چاه عمیق (آب شیرین)"  image={image2} city="مشهد" price={950001}/>
      <Product titelname="کولر آبی 4000 مشهد دوام " sumerytext="کولر ورق ضخیم گالوانیزه مشهد دوام موتور اصلی کلا یک" image={image3} city="مشهد" price={12004563}/>

    </div>
    <div className='mainad'>
      <Product titelname="ساعت سالم ۳۰۰ تومن" sumerytext="ساعت سالم رنگ سبز "  image={image1} city="مشهد" price={1100002}/>
      <Product titelname="آپارتمان 130 متری قایم مقام" sumerytext="2واحدی کف موکت کابینت فلز اشپزخانه سبک قدیم"   city="مشهد"  price={5500032}/ >
      <Product titelname="باغ پسته شهرک بینالود" sumerytext="5 ساعت آب چاه عمیق (آب شیرین)"  image={image2} city="مشهد" price={100025}/>
      <Product titelname="کولر آبی 4000 مشهد دوام " sumerytext="کولر ورق ضخیم گالوانیزه مشهد دوام موتور اصلی کلا یک" image={image3} city="مشهد" price={880012}/>

    </div>
    <div className='mainad'>
      <Product titelname="ساعت سالم ۳۰۰ تومن" sumerytext="ساعت سالم رنگ سبز "  image={image} city="مشهد" price={42500}/>
      <Product titelname="آپارتمان 130 متری قایم مقام" sumerytext="2واحدی کف موکت کابینت فلز اشپزخانه سبک قدیم"   city="مشهد" price={8750012}/>
      <Product titelname="باغ پسته شهرک بینالود" sumerytext="5 ساعت آب چاه عمیق (آب شیرین)"  image={image2} city="مشهد" price={830000}/>
      <Product titelname="کولر آبی 4000 مشهد دوام " sumerytext="کولر ورق ضخیم گالوانیزه مشهد دوام موتور اصلی کلا یک" image={image3} city="مشهد" price={70078}/>

    </div>
    
     
      
      



    </>
  )
};
export default mashhad;