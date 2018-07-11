import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

class DetailTurkey extends Component {

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
            <div>
            console.log(data)
              <h1>author : {data.index.author}</h1>
              <h2>title : {data.index.title}</h2>
              <Link to='/roster'>Back</Link>
          </div>
          )
        })
      }
      
     </div>
    );
  }
}

export default DetailTurkey;