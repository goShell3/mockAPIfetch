import React, { Component } from 'react'

import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3000/posts')
  }


  render() {
   
    return (
      <div>
        
      </div>
    )
  }
}

export default PostList
