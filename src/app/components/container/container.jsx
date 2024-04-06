"use client"
import React from 'react'
import "./container.css"
import styled from 'styled-components';

const ContainerStyle1 = styled.div
  `
    background-color: ${props => props.customstyle.backgroundColor1};
  `
const ContainerStyle2 = styled.div
  `
    background-color: ${props => props.customstyle.backgroundColor2};
`
const ContainerStyle3 = styled.div
  `
    background-color: ${props => props.customstyle.backgroundColor3};
`
const ContainerStyle4 = styled.div
  `
    background-color: ${props => props.customstyle.backgroundColor4}
`

const container = ({ customstyle}) => {
  return (
    <>
      <div className='conatiner'>
        <ContainerStyle1 className="box" customstyle={customstyle}>CONTAINER 1 </ContainerStyle1>
        <ContainerStyle2 className="box" customstyle={customstyle}>CONTAINER 2 </ContainerStyle2>
        <ContainerStyle3 className="box" customstyle={customstyle}>CONTAINER 3 </ContainerStyle3>
        <ContainerStyle4 className="box" customstyle={customstyle}>CONTAINER 4 </ContainerStyle4>
      </div>
      
    </>
  )
}

export default container