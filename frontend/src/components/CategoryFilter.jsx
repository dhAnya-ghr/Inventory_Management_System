import React, { useState } from "react";

export default function CategoryFilter({ categories, onSelect }) {
  const [selected, setSelected] = useState("All");

  return (
    <select
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
        onSelect(e.target.value);
      }}
      className="border rounded-lg p-2"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}