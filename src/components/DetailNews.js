import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class DetailNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleDetails : [],
      idArticle: parseInt(this.props.match.params.index, 30)
    } 
  }   
  
  componentDidMount() {      
    axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=cc474d575828432c8c562bd5dc35d3f8')
    .then((res)=> {  
     console.log(res.data)       
        this.setState
        (
            {
                articleDetails: res.data.articles[this.state.idArticle]
            }            
        )         
    }).catch(err => console.log(err))
  }
  
  render(){
    return ( 
        <div align="center"> 
            <div>                
	            <h3>
	            	{this.state.articleDetails.title} 
	           	</h3>
            </div>
            <div>                
	            <h3>
	         		{this.state.articleDetails.description}                  
	            </h3>
            </div>   
           <div className="image">
                <img src={this.state.articleDetails.urlToImage} height="200" width="200" alt="" />
            </div>  
            <Link to='/newsapi'>Back</Link>         
         </div>
      
    );
  }

}

export default DetailNews;