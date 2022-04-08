import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedBlogDetails = {
      id: data.id,
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogDetails: updatedBlogDetails, isLoading: false})
  }

  renderingBlogDetails = () => {
    const {blogDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetails
    return (
      <div className="blogdetail-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-details-container">
            <h1 className="title">{title}</h1>
            <div className="blog-details">
              <div className="avatar-author">
                <img src={avatarUrl} className="avatar" alt="avatar" />
                <p className="author">{author}</p>
              </div>
              <img src={imageUrl} className="blog-item-image" alt={title} />
              <p className="content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  render() {
    return this.renderingBlogDetails()
  }
}
export default BlogItemDetails
