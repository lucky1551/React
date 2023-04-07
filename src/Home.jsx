import React,{useState, useContext, useEffect} from 'react'
import './App.css';
import { Context } from './index';


const Home = () => {
    // useContext hook
const Row = ()=>{
    const data = useContext(Context);
    console.log(data);
}
// useState hook
const [a,setA] = useState(0);
const increment = ()=>{
    setA(a+1);
}  
const decrement = ()=>{
    setA(a-1);
}

// useEffect hook: it will run intially but will also run when something passed in "[]" changes. It will run twice because of React Strict mode in "index.js" file.
 useEffect(()=>{
  console.log("showing effect")
 },[a])
  return (
    <div className='home'><button onClick={increment}>+</button>
    {a} <button onClick={decrement}>-</button>
    <Row/>
   </div>
  )
}

export default Home