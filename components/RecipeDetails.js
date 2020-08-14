import React from 'react';
import { Link } from 'react-router-dom'

class RecipeDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recipe: null
        };

    }

componentDidMount(){
    this.searchRecipe(this.props.match.params.id);
}    
searchRecipe(recipeId)
{
  fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${recipeId}`)
  .then(response=>response.json())
  .then(data=>this.setState({
    recipe: data.recipe
  }))
}
    render(){
        if(this.state.recipe){
            const{
                image_url,
                recipe_id,
                title,
                publisher,
                source_url,
                ingredients
            
            }=this.state.recipe;

        
        return (
            <div className="Recipe-details">
           
               <img src ={image_url} alt={recipe_id} />  
              <p>{title}</p>
              <p>{publisher}</p>
              <p>WEBSITE:
                  <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {source_url}</a>
                  </p>
              <ul>
                  {
                    ingredients.map((ingridient,index)=>(<li key={index}>{ingridient}</li>))
                  }
                </ul>
                <Link to="/">
                 HOME
                </Link>
           </div>
           );
        }
        else{
            return(
                <div>
                    <h1>Fetching data</h1>
                </div>
            );
        }
    }
}

export default RecipeDetails;