import React from 'react';
import './App.css';
import Hand from "../image/hand-point.svg";
const Home = () => {
        return (
            <>
                <div className='homepage'>

                <h1 className="topictittle" >جهت نمایش اگهی ها شهر مورد نظر خود را انتخاب کنید</h1>
                <img src={Hand} class="img-fluid" alt="arow"/>
                </div>
            </>
        );
}

export default Home;