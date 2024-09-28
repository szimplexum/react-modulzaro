import React from "react";

export default function TaskButtons() {
  return (
    <div className="container border rounded-bottom p-3 bg-light text-dark d-flex justify-content-between">
      <button className="btn btn-primary">Next Question</button>
      <button className="btn btn-success">Add New Question</button>
    </div>
  );
}
