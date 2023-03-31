import React from "react";

const Burger = ({ ...props }) => {
  const burgerEl = Array.from({ length: 9 }, () => "");

  return (
    <>
      <div {...props}>
        {burgerEl.map((_el , id) => (
          <span key={id}></span>
        ))}
      </div>
    </>
  );
};

export default Burger;