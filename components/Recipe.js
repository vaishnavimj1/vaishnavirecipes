import React from 'react';
import { Link } from 'react-router-dom';


function Recipe(props)

{
    
    return (
           <div className="Recipe">
             <img src ={props.data.image_url} alt={props.data.recipe_id} />
             <p>{props.data.title}</p>
             <Link 
                to=
                    {`/recipe/${props.data.recipe_id}`}

            >
                View More
            </Link>
             {/* <form>
             <button type="submit" formaction={props.data.f2f_url}>More details</button>
             </form> */}
          </div>
          );
}

export default Recipe;