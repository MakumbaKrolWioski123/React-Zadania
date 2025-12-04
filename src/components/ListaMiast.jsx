import { useEffect, useState } from "react";


const ListaMiast = () =>
{
  const List =({items,heading})=>{
    return(
        <div>
            <h2>{heading}</h2>
        {items.length===0 ?
            <p>Brak elementów do wyświetlenia</p>
            :
              <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
              </ul>
        }  
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
            items={[]}
            heading="Imiona"
            />
        </div>
    );
}

export default ListaMiast;

