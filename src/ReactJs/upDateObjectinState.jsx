import { useState } from "react";

export default function UpDateObject() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }
  function ChangeName(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          className="border"
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          className="border"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          className="border"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          className="border"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
      <form onSubmit={(e) => e.preventDefault()}>
        <input />
        <button>Send</button>
      </form>
      <div>
        <label className="mx-3">Name</label>
        <input
          className="border"
          onChange={ChangeName}
          value={person.artwork.title}
        ></input>
      </div>
    </>
  );
}
