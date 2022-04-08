import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {imageUrl, topic, title, avatarUrl, author, id} = eachBlog
  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <div className="blog-container">
        <img src={imageUrl} className="blog-image" alt={`title${id}`} />
        <div className="blog-text">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-author">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
