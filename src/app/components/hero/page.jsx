// import React from 'react'
// // import axios from 'axios';


// const hero = async () => {

//     const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-CMC_PRO_API_KEY': '0d38d9c5-9da0-49d3-8902-8355ab762fd8', 
//         }
//     };

//     const res = await fetch(url,options);
//     const crdata = await res.json();
//     const main_data = crdata.data;


//     return (
//         <>
//         <div>ukcode</div>
//         {
//             main_data.map((currEle,index,arr)=>{
//                 return <div>`the price of {currEle.name} = ${currEle.quote.USD.price}`</div>
//             })
//         }

//         </>

//     )
// }

// export default hero

import React from 'react'
import "./hero.css"
import Link from 'next/link'

const hero = () => {
    return (
        <>
            <div className="hero">

                <div className="hero-container">
                    <h1 className="main-head">
                        The Beautiful UI Colors Pallets

                    </h1>
                    <p className="main-para">Press spacebar, enter a hexcode or change the
                        HSL values to create a custom color scale
                    </p>
                </div>

                <div className="container-box">
                    <div className="conatiner-boxes1 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes2 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes3 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes4 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes5 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes6 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes7 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes8 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes8 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                    <div className="conatiner-boxes8 boxes"><p className="box-name">
                        ukcode</p>
                    </div>
                </div>
                {/* <input type="color" id="colorpicker" value="#0000ff"></input> */}
                <div className="btn-main-hero">
                    <Link href="/ui-shades"><button className="btn-hero1 insideBtn">Explore Shades</button></Link>
                    <Link href="/shadesgenarator"><button className="btn-hero2 insideBtn">Shades Genarator</button></Link>
                </div>
            </div>
        </>
    )
}

export default hero