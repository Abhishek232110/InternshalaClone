import { useState } from "react";

export default function RevisionPage() {
  const [profile, setProfie] = useState({
    fname: "Abhishek",
    lname: "Kumar",
    score: 200,
  });
  const changeFName = (e) => {
    setProfie({
      ...profile,
      fname: e.target.value,
    });
  };
  const changeLName = (e) => {
    setProfie({
      ...profile,
      lname: e.target.value,
    });
  };
  const changeScore = (e) => {
    setProfie({
      ...profile,
      score: e.target.value,
    });
  };
  return (
    <>
      <form className="container bg-blue-300">
        <label>First Name</label>
        <input onChange={changeFName} value={profile.fname}></input>
        <input onChange={changeLName} value={profile.lname}></input>
        <input onChange={changeScore} value={profile.score}></input>
      </form>
    </>
  );
}
