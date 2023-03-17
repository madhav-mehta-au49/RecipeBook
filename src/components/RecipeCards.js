import React from 'react'
import Costomimage from './Costomimage'


function RecipeCards({recipe}) {
  return (
       <div className="recipe-card">
            <Costomimage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
  )
}

export default RecipeCards
