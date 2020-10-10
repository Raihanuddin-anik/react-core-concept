import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [ "raihan","sharukh khan","amir khan", "salman khan", "shakib", "salman sha"]
  const products = [
                 { name: 'mobile', price :' headphpone' },
                 {name: 'laptop', price : 'keyboard'}
  ]     

  return (
    <div className="App">
      <header className="App-header">
        <p>I am React person</p>
        <Count></Count>
        <Users></Users>
             {
               products.map(pd =><Product product={pd.name}></Product>)
             }    
             <Product product = 'raihan'></Product>
      </header>
    </div>
  );
}

function Count() {
  const [count, setcount] = useState(10);
 const handleClick = () =>{ setcount(count + 1);}
  return(
    <div>
      <h1>
        count:{count}
      </h1>
      <button onClick = {() => setcount(count -1 )}> Decrease</button>
      <button onClick={handleClick}> Increase</button>
    </div>
  )
  
}

function Users(){

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data))
    
  })
  
  return(
  <div>
    <h1>Dinamic :{users.length} </h1>
    <ul>
      <li>
        {
          users.map(element => <li>{element.name}</li>)
        }
      </li>
    </ul>
    <p>Raihan uddin</p>
  </div>
  )
}

function Product(props) {
   var style = {
      border: '5px solid white',
      backgroundColor: 'gray',
      borderRadius: '10px',
      height: '300px',
      width: '300px',
      float: 'left' 
        }
       
  return <div style= {style}>
    <h1> product: {props.product}</h1>
    
    <button>buy now </button>
  </div>
}
export default App;
