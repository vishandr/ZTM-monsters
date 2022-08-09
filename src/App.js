import './App.css'
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchField: ''
    };
  }
  
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then((users) => this.setState(
      () => {
        return {monsters : users};
      }
      ));
    }
    
    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(()=>{
        return { searchField };
      });
    };


    render(){  
    
      const filteredMonsters = this.state.monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(this.state.searchField);
    });

      return (
      <main>
      <input 
        className='search-box' 
        type='search' placeholder='search monsters'
        onChange={ this.onSearchChange } />
      
      {/* {this.setState.filteredMonsters = this.state.monsters.filter((name) => {name.contains(this.state.search)})} */}

      {filteredMonsters.map((monster) => { 
        return <h1 key={monster.id}>{monster.name}</h1> }
        )}

      </main>
    )
  }
}
  ;


export default App;
