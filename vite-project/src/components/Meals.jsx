import { useGlobalContext } from "../context"
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () => {
const {meals} = useGlobalContext( )
    
  return <section className="section-center">
    {meals.map((singleMeal)=>{
const {idMeal, strMeal:title, strMealThumb:image} = singleMeal

      
      // eslint-disable-next-line react/jsx-key
      return <article key={idMeal} className="single-meal">
        <img src= {image} className="img" />
        <footer>
          <h5>{title}</h5>
          <button className="like-btn"><BsHandThumbsUp/></button>
        </footer>
      </article>
    })}
  </section>
 
}

export default Meals