import React from "react";

export const Content = () => {
  const handleName = () => {
    const name = ["Asad", "Atiq", "Hanzla"];
    const names = name[Math.floor(Math.random() * name.length)];
    return names;
  };

  return (
    <main className="mainBody">
      <p>Hello {handleName()}!</p>
      <button onClick={() => handleName}>Change the Name</button>
    </main>
  );
};
