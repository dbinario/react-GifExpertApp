import { useState } from 'react';


//aqui definimos que recibimos en este caso funciones
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange=({target})=>{

        setinputValue(target.value);

    }

    const onSubmit=(event)=>{

    

        event.preventDefault();
        //evitamos que sea al menos 1 caracter
        if(inputValue.trim().length<=1) return;

        onNewCategory(inputValue.trim());
        setinputValue('');
        




    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
  )
}
