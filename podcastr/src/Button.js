import  { useState } from 'react';

export default function Button(props){
    // [estado, function alterarEstado]
    const [counter, setCounter] = useState(1);
    // counter = 1


    function increment(){
        //counter = counter + 1
        setCounter(counter +  1)
    }

    return(
        // props.children:<Button>Nome</Button>
        // props.title: <Button title="Nome"/>        
        <>
        <span>{counter}</span>
        <button onClick={increment}>{props.children || props.title}</button>
        <br/>
        </>
    )
}