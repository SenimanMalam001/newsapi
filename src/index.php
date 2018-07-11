import React, { Component } from 'react';
import Hasil from './component/Hasil.js'
import Axios from 'axios';
import Router from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//1 file 1 komponen

class App extends Component {
  //fungsi yang pertama kali dijalankan
  constructor(){
    super()
    this.state = {
      input1 : '',
      hasil  : '',
      planets : []
    }
  }

  componentDidMount() {
    Axios.get('https://swapi.co/api/planets/')
    .then((res)=> {
    console.log(res.data)
    //serults
    this.setState({planets: res.data.results})
    }).catch(err => console.log(err))
}

  //agar dapat mengetik didalam inputan
  handleChange = (el) =>{
    this.setState({[el.target.name]: el.target.value})
  }

//eval berfungsi sebagai mengubah text menjadi numerik
  hitung = () =>{
    const jumlah = eval(this.state.input1);
    this.setState({hasil: jumlah})
  }

  render() {
    return (
      <div className="App">
      
      {
        this.state.planets.map((data, index) => {
          return (
            <div  align="center" key={index}>
              <h1> {data.name} </h1> 
            </div>
          )
        })
      }
      
      {/* <input 
            type="text" 
            name="input1" 
            value={this.state.input1} 
            onChange={this.handleChange} />

          <button onClick={this.hitung}> Hitung </button>
          <Hasil hasil={this.state.hasil} />
      */}
      </div>
    );
  }
}

export default App;
