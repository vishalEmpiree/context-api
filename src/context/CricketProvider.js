import React,{useState} from "react";
import CricketContext from "./CricketContext"; //  {a: 10}

// add value to the context => add the data to the  glboal object we crearted in previosu step 

const CricketProvider = (props) => {
     let [cricketer, setCricketer] = useState({
            name: "Sachin Tendulkar",
            age: 51,
            runs: 18426,
            wickets: 46,
            matches: 463,
     });
     let count = 0

     
   
//    let obj = {
//     name: cricketer.name,
//     age: cricketer.age, 
//    }

    return(

        <CricketContext.Provider value={{
            cricketer: cricketer,
            setCricketer : setCricketer,
            count: count,
        }}> 

            {props.children}
        </CricketContext.Provider>
         
    )

}

export default CricketProvider;

// value = 10 
// value = {a} , value = {a:10}
