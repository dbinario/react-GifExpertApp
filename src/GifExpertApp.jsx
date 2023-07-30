import { useState } from "react"
import { AddCategory,GifGrids } from "./components";

export const GifExpertApp = () => {


const [categories, setCategories] = useState(['One Punch']);

const onAddCategory=(newCategory)=>{

  if(categories.includes(newCategory)) return;

  console.log(newCategory);

  //Valorant
  //categories.push('Valorant');

  //setCategories(categories.concat('Valorant'));

  //  setCategories(cat=>[...cat,'Valorant']);
  setCategories([newCategory,...categories]);


}

  return (
    <>
    <h1>GifExpertApp</h1>
    

    <AddCategory 

      onNewCategory={(value)=>onAddCategory(value)}

    />

    
      {categories.map((category)=>
         (
          <GifGrids 
            key={category}
            category={category}
          />
        ))}
    
      {/* Gif Item */}

    </>
  )
}
