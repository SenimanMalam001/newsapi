import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    //serults
    this.setState
    (
      {author: res.data.articles}
    )
    }).catch(err => console.log(err))
}

     render() {
    return (
      <div className="App">
      
      {
        this.state.author.map((data, index) => {
          return (
            <div key={index}>
              <h5>Title <a href={data.url}> {data.title} </a></h5> 
              <h5>Gambar <a href={data.urlToImage}> {data.urlToImage} </a></h5> 
            </div>
          )
        })
      }
      
     </div>
    );
  }
}

export default NewsApi;