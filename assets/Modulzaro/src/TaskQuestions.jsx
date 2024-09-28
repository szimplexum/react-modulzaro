import React from "react";

export default function TaskQuestions() {
  return (
    <div className="container ">
      <div>
        <p>Question ×</p>
      </div>
      <div>
        <form className="form-controll">
        <label className="btn btn-primary form-control m-1" for="kerdes1">
            Kérdés 1
          </label>
          <input
            className="d-none"
            type="radio"
            id="kerdes1"
            name="kerdes1"
            value="Kerdes1"
          ></input>        <label className="btn btn-primary form-control m-1" for="kerdes1">
          Kérdés 1
        </label>
        <input
          className="d-none"
          type="radio"
          id="kerdes1"
          name="kerdes1"
          value="Kerdes1"
        ></input>        <label className="btn btn-primary form-control m-1" for="kerdes1">
        Kérdés 1
      </label>
      <input
        className="d-none"
        type="radio"
        id="kerdes1"
        name="kerdes1"
        value="Kerdes1"
      ></input>        <label className="btn btn-primary form-control m-1" for="kerdes1">
      Kérdés 1
    </label>
    <input
      className="d-none"
      type="radio"
      id="kerdes1"
      name="kerdes1"
      value="Kerdes1"
    ></input>
        </form>
      </div>
    </div>
  );
}
