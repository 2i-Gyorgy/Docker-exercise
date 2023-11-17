const Comment = ({post}) => {
    return (
        <>
            <h3>{post.name}</h3>
            <h3>{post.comment}</h3>
        </>
    )
}

export default Comment