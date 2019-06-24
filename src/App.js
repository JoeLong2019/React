import React, {useState} from "react"; 
import Tweet from "./Tweet";

function App(){

 const [isRed, setRed] = useState(false);
 const [count, setCount] = useState(0);

 const increment = () => {
   setCount(count + 10);
 };

  return(
    <div className="app">
      {/* <h1>Tweeter Feed</h1> */}
      <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
      {/* <Tweet name="Joe" message="Good Morning"/>
      <Tweet name="Jo" message="Hello World"/>
      <Tweet name="JoJo" message="Im hungry"/>
      <Tweet name="Joey" message="Goodnight"/>
      <Tweet name="Joseph" message="$$$"/>
      <Tweet name="JoeLong" message="I ran out of names"/> */}
    </div>
  );
}

export default App; 