import { useEffect, useState } from "react";

const ListGlow = ({items,selectedItem,onSelectItem})=>
{
    return(
        <div>
            {items.map((item,index)=>(
            <ul>
                 <li   
                 key={index}
                    className={item===selectedItem ? 'active': ''}
                    onClick={()=>onSelectItem(item)}
                >{item}</li>
            </ul>
            ))}
        </div>
    );
};

const ListGlowContainer = () =>
{
    const [selectedItem,setSelectedItem]=useState(null);
    const items=['Warszawa','Krakow','Gdansk'];
    const handleSelectItem=(item)=>{
        setSelectedItem(item);
        console.log("Wybrano: ",item);
    }
    return(
        <div>
            <ListGlow
                items={items}
                selectedItem={selectedItem}
                onSelectItem={handleSelectItem}
            />
        </div>
    );
}


export default ListGlowContainer;

