import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppContent from './components/AppContent'
import axios from 'axios'
class App extends Component {

  constructor(){
    super()
    this.state = {
      userinfo:null,
      repos:[],
      starred:[],
      isFetching:false
    }
  }

handleSearch(e){

    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if(keyCode === ENTER){
      this.setState({isFetching:true})
    axios.get(`https://api.github.com/users/${value}`)
      .then((result)=>{
        this.setState({userinfo:result.data,repos:[],starred:[]})
        
      }
    )
    .catch((error)=>{
      console.log(error)
    })
    .then(()=>{
      this.setState({isFetching:false})
    })

  }
}

handleRepos(type){
  axios.get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
  .then((result)=>{
    this.setState({
      [type]:result.data
    })
  })
}
  render() {
      return <AppContent
          userinfo={this.state.userinfo}
          repos={this.state.repos}
          starred={this.state.starred}
          isFetching={this.state.isFetching}
          handleSearch={(e)=>this.handleSearch(e)}
          handleRepos={()=>this.handleRepos('repos')}
          handleStarred= {()=>this.handleRepos('starred')}

      />
  }
}

export default App;
