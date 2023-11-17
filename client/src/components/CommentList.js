import React from "react"
import Comment from "./Comment"

const CommentList = ({comments}) => {
    const posts = comments.map((post, index) => {
        return (<Comment post={post} key={index} />)
    })
    return(
      <div>
            {posts}
      </div>
    )
  }
   
  export default CommentList
