import React from 'react'
import "./uishades.css"

const componentui = ({style1,style2,style3,style4,style5,style6,style7,style8,style9,style10,name,name1,name2,name3,name4,name5,name6,name7,name8,name9,name10}) => {
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"2.5vmax",fontWeight: "bold"}}>{name}</h1>
        <div className="shades-box-main">
            <div className="shades-box" style={style1}>{name1}</div>
            <div className="shades-box" style={style2}>{name2}</div>
            <div className="shades-box" style={style3}>{name3}</div>
            <div className="shades-box" style={style4}>{name4}</div>
            <div className="shades-box" style={style5}>{name5}</div>
            <div className="shades-box" style={style6}>{name6}</div>
            <div className="shades-box" style={style7}>{name7}</div>
            <div className="shades-box" style={style8}>{name8}</div>
            <div className="shades-box" style={style9}>{name9}</div>
            <div className="shades-box" style={style10}>{name10}</div>
        </div>

    </div>
  )
}

export default componentui