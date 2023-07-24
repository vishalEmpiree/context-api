import React from "react";
import Hello from "./Components/Hello";
import Cricket from "./Components/Cricket";

import CricketProvider from "./context/CricketProvider";


const App = () => {
   

  return(
    <div>
  
         <Cricket />
    
    </div>
  )


}

export default App;



// Three steps of context: 

// 1) Create the context => create global object 

// A Component => It will help you to add data to the global object


{/* <Hello> 
    <h1>hello</h1>
</Hello> */}


