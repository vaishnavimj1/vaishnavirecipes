import React from 'react';
import { Link } from 'react-router-dom'

const YOUR_API_KEY=process.env.REACT_APP_API_KEY;

class RecipeDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recipe: null
        };
    }

componentDidMount(){
    //console.log("hello",this.props);
    this.searchRecipe(this.props.match.params.id);
}    
    searchRecipe(recipeId)
{
  fetch(`https://www.food2fork.com/api/get?key=${YOUR_API_KEY}&rId=${recipeId}`)
  .then(response=>response.json())
//   .then(data=>console.log("fectched json data",data))
  .then(data=>this.setState({
    recipe: data.recipe
  }))
  
  // 
}
    render(){
        //console.log("inside render method",)
        
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
 
              {/* <form>
              <button type="submit" formaction={props.data.f2f_url}>More details</button>
              </form> */}
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