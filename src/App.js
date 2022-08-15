import './App.css'
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/Search-box';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      // filteredMonsters: [],
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
      const searchField = event.target.value.toLowerCase();
      this.setState(()=>{
        return { searchField };
      });
    };


    render(){  
      // const { monsters, searchField } = this.state
      // const {onSearchChange} = this;

      const filteredMonsters = this.state.monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(this.state.searchField);
    });

      return (
      <main>
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        onChangeHandler={this.onSearchChange}
        className={'search-box'}
        placeholder='search monsters'
      />
      
      <CardList monsters={ filteredMonsters }/>
      </main>
    )
  }
}
  ;


export default App;
