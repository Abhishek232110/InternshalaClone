import React from "react";

export const ProfileEditor = () => {
  return (
    <div className="bg-zinc-400">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          First name:
          <b id="firstNameText">Jane</b>
          <input id="firstNameInput" value="Jane" />
        </label>
        <label>
          Last name:
          <b id="lastNameText">Jacobs</b>
          <input id="lastNameInput" value="Jacobs" />
        </label>
        <button type="submit" id="editButton">
          Edit Profile
        </button>
        <p>
          <i id="helloText">Hello, Jane Jacobs!</i>
        </p>
      </form>
    </div>
  );
};
