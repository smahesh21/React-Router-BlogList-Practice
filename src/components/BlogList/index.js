import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      author: eachData.author,
      title: eachData.title,
      topic: eachData.topic,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      id: eachData.id,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div testid="loader" className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachBlog => (
            <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
