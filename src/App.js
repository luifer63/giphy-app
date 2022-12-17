import { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Navigation from './components/Navigation';

class App extends Component {

  constructor(){
    super()
    this.state = {
      iconsList : []
    }
}

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?api_key=cDyawnRCMDiT2tqIWwTcvw7u6Ci3TtBZ&q=random&limit=10&offset=0&rating=g&lang=en')
      .then(respuesta => respuesta.json())
      .then(icons =>{
      this.setState({iconsList: icons.data})})
      .catch(error => console.log(error))
  }

  componentDidUpdate(){
    fetch('https://api.giphy.com/v1/gifs/search?api_key=cDyawnRCMDiT2tqIWwTcvw7u6Ci3TtBZ&q=random&limit=10&offset=0&rating=g&lang=en')
      .then(respuesta => respuesta.json())
      .then(icons =>{
      this.setState({iconsList: icons.data})})
      .catch(error => console.log(error))
  }

  render(){

    return (
      <div className="App">
        <Navigation/>
      {
      this.state.iconsList.map((icons, index) => {
        return <Container {...icons} {...index}/>
      })
      
      }

             
      </div>
    )

  }
  
}

export default App;
