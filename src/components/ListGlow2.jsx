import { useState } from "react";

const ListGlow = ({ items, selectedItem, onSelectItem }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item === selectedItem ? "active" : ""}
            onClick={() => onSelectItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListGlowContainer2 = () => {
  const items = ["Warszawa", "Kraków", "Gdańsk"];
  const [selectedItem, setSelectedItem] = useState("Kraków"); // ⭐ domyślne podświetlenie

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    console.log("Wybrano:", item);
  };

  return (
    <div>
      <ListGlow
        items={items}
        selectedItem={selectedItem}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default ListGlowContainer2;
