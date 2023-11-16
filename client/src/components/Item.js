const Item = ({product}) => {
    return (
        <>
            <h3>{product.title}</h3>
            <img src={product.image} width="250" height="250"></img>
        </>
    )
}

export default Item