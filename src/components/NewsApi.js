import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

class NewsApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: []
    };
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=191022accf2a4053b889f3f06c64e4bc')
    .then((res)=> {
    console.log(res.data)
    this.setState
    (
      {author: res.data.articles}
    )
    }).catch(err => console.log(err))
}

    render() {
    return (
      <div className="App" align="center">
      
      {
        this.state.author.map((data, index) => {
          return (
            <div className="content" key={index}>
              <h5><Link to={`/newsapi/${index}`}> {data.title} </Link></h5>
            </div>
          )
        })
      }
     </div>
    );
  }
}

export default NewsApi