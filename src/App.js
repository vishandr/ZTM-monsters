import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/Search-box';
import { useEffect, useState } from 'react'
// import Example from './components/Effect';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [changeTitle, setChangeTitle] = useState('');
  const [monsters, setMonsters] = useState([]);

  console.log('render') 
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((responce) => responce.json())
    .then((users) => setMonsters(users));
}, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  };

  const onChangeTitle = (event) => {
    const changeTitleString = event.target.value.toLowerCase();
    setChangeTitle(changeTitleString)
  };

  const filteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLowerCase().includes(searchField);
  });

        return (
        <main>
          <h1>{ changeTitle }</h1>
          <SearchBox 
            onChangeHandler={onSearchChange}
            className={'search-box'}
            placeholder='search monsters'
          />

          <br />
          <SearchBox 
            onChangeHandler={onChangeTitle}
            className={'search-box'}
            placeholder='Change Title'
          />
          {/* <Example /> */}
          <CardList monsters={ filteredMonsters }/>
        </main>)
} 

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       monsters: [],
//       // filteredMonsters: [],
//       searchField: ''
//     };
//   }
  
  
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(responce => responce.json())
//     .then((users) => this.setState(
//       () => {
//         return {monsters : users};
//       }
//       ));
//     }
    
//     onSearchChange = (event) => {
//       const searchField = event.target.value.toLowerCase();
//       this.setState(()=>{
//         return { searchField };
//       });
//     };


//     render(){  
//       // const { monsters, searchField } = this.state
//       // const {onSearchChange} = this;

//       const filteredMonsters = this.state.monsters.filter((monster)=>{
//         return monster.name.toLowerCase().includes(this.state.searchField);
//     });

//       return (
//       <main>
//       <h1>Monsters Rolodex</h1>
//       <SearchBox 
//         onChangeHandler={this.onSearchChange}
//         className={'search-box'}
//         placeholder='search monsters'
//       />
      
//       <CardList monsters={ filteredMonsters }/>
//       </main>
//     )
//   }
// }
//   ;


export default App;
