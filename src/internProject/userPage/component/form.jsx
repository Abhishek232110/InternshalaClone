import { useEffect, useState } from "react";

export function FormPage() {
  // const [text, setText] = useState();
  // const url = "http://localhost:8000/message";
  // const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [form, setForm] = useState();

  const submitHandle = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    // console.log(form);
  };

  const eventHandler = (e) => {
    // console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="bg bg-zinc-200">
        <div>
          <form onSubmit={submitHandle} className="">
            <span>Name</span>
            <input type="text" name="username" onChange={eventHandler}></input>
            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={eventHandler}
            ></input>
            <button onSubmit={() => {}}>submit</button>
            {/* <p>{JSON.stringify(text)}</p> */}
          </form>
        </div>
        <div>
          <img></img>
        </div>
        <h1>Appp</h1>
        <h1>{JSON.stringify(form)}</h1>
      </div>
    </>
  );
}
