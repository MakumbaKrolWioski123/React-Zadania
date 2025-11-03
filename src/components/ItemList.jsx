import { useState } from "react";
 
const ItemList = () => {
 
 const items = ["Jabłko", "Banan", "Gruszka"];
 const [selectedIndex, setSelectedIndex] = useState(-1);
 
 return (
 <ul>
      {items.map((item, index) => (
      
      <li key={index} className={selectedIndex === index ? "active" : ""} 
            onClick={(selectedIndex === index)
            ? () => setSelectedIndex(-1)
            : () => setSelectedIndex(index)}   
            >  
            {item}
      </li>
      ))}
      
 </ul>
 
 );
};

export default ItemList;
 

