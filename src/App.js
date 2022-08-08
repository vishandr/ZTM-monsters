import './App.css'
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then((users) => this.setState(
      () => {
        return {monsters : users};
    },
    () => {
      console.log(this.state)
    }
    ));
  }

//console.log(users))

  render(){  
    return (
      <main>
      {this.state.monsters.map((monster) => { 
        return <h1 key={monster.id}>{monster.name}</h1> }
        
      )}
      </main>
    )
  }
}
  ;


export default App;
