import React from "react"
import Item from "./Item"

const ItemList = ({items}) => {
    const products = items.map((product, index) => {
        return (<Item product={product} key={index} />)
    })
    return(
      <div>
        <h1>I'm an item list</h1>
        <div class="flex-container">
            {products}
        </div>
      </div>
    )
  }
   
  export default ItemList
