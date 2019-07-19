import React from 'react';
import Search from './components/Search';
import Recipes from './components/Recipes';
import './App.css';
const YOUR_API_KEY=process.env.REACT_APP_API_KEY;
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
  fetch(`https://www.food2fork.com/api/search?key=${YOUR_API_KEY}&q=${recipename}`)
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
        <h1>Recipe</h1>
      </header>
      <Search onSubmit={this.searchRecipe} />
      <br />
      <Recipes recipes={this.state.recipes}/>
    </div>
  );
}
}
export default App;