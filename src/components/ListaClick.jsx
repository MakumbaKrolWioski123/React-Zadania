import { useEffect, useState } from "react";


const ListaClick = () =>
{
  const List =({items,heading})=>{
    return(
        <div>
            <h2>{heading}</h2>
              <ul>
                {items.map((item,index)=>(
                    <li key={index} onClick={()=>console.log("Kliknieto na: ",item)}>{item}</li>
                ))}
              </ul>
        </div>
    );
  }
    return(
        <div>
          <List
            items={['Nowy Jork','Londyn','Paryż']}
            heading="Miasta"
            />
            <List 
            items={['Czerwony','Zielony','Niebieski']}
            heading="Kolory"
            />
        </div>
    );
}

export default ListaClick;

