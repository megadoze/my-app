import React, { useState } from "react";
import Counter from "./counter";

const СountersList = () => {
  const initialState = [
    { id: 345, value: 0, name: "Ненужная вещь" },
    { id: 34, value: 4, name: "Ложка" },
    { id: 467, value: 0, name: "Вилка" },
    { id: 44, value: 0, name: "Тарелка" },
    { id: 98, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const index = counters.findIndex((name) => name.id === id);
    counters[index].value += 1;
    const newCounters = counters.map((name) => name);
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const index = counters.findIndex((name) => name.id === id);
    counters[index].value -= 1;
    const newCounters = counters.map((name) => name);
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
export default СountersList;
