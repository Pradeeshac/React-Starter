import React,{useState} from "react";

function MyCompo(){
    const[foods,setFoods]=useState(["Apple","Banana","Orange"]);

    const handleAddFood=()=>
    {
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods([...foods,newFood]);
    }
    const handleRemoveFood=(index)=>
    {
        setFoods(foods.filter((_,i)=>i!==index));
    }

   return(<div>
    <h2>List of Food</h2>
    <ul>
        {foods.map((food,index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
    </ul>
    <input type="text" id="foodInput" placeholder="Enter Food Name"/>
    <button onClick={handleAddFood}>Add Food</button>
   </div>);
}
export default MyCompo