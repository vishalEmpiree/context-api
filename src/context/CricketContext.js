
// Create the context => create an object which is glboal and can be accessed from anywhere in the app

import React from "react";

const CricketContext =  React.createContext();

// console.log(CricketContext); // Global object => values, Provider, Consumer

export default CricketContext;









// add value to the context => add the data to the  glboal object we crearted in previosu step 

// access the context value => access the data from the global object we created in previous step