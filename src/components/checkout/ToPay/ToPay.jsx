import React from "react";

const ToPay = ({totalData}) => {

    const totalProduct = totalData.map((elm)=> {
        return elm[1]*elm[2]
    })
    
    console.log(totalProduct)

   const totalSum = totalProduct.reduce((prev, curr) => prev+curr, 0)

    return (
        <>
        <h1>{totalSum} €</h1>
        </>
    )
}



export default ToPay