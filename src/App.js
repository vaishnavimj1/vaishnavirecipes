import React from 'react';
import Search from './components/Search';
import Recipes from './components/Recipes';
import './App.css';

class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.searchRecipe=this.searchRecipe.bind(this);
    this.state={
      recipes: []
    }
  }

searchRecipe(recipename)
{
  fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipename}`)
  .then(response=>response.json())
  //.then(data=>console.log("fectched json data",data))
  .then(data=>this.setState({
    recipes: data.recipes
  }))
  
  // 
}

render()
{
  return(
    <div className="App">
      <header className="App-header">
        <h1>RECIPES</h1>
        <header className="header4">
        <h5>Quick and Easy Delicious Recipes</h5>
        </header>
      </header>
      <Search onSubmit={this.searchRecipe} />
      <br />
      <Recipes recipes={this.state.recipes}/>
    </div>
  );
}
}
export default App;