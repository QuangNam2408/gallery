import React, { useState } from "react";

import './gallery.css';


import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';
import img4 from './img/img4.jpeg';
import img5 from './img/img5.jpeg';
import img6 from './img/img6.jpeg';
import img7 from './img/img7.jpeg';
import img8 from './img/img8.jpeg';
import img9 from './img/img9.jpeg';
import img10 from './img/img10.jpeg';
import img11 from './img/img11.jpeg';
import img12 from './img/img12.jpeg';

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        }
        
    ]
    const [model, setModel] = useState(false);
    const [ tempImgSrc, setTemImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTemImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} alt="" /> 
                <svg src="./img/close.svg" onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt=""/>
                        </div>
                    )
                })}
            </div>
        </>
    )   
}

export default Gallery