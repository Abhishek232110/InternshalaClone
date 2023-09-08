const people = [
  { id: 1, name: "ABhi", vill: "manikpur" },
  { id: 2, name: "ashish", vill: "mohin" },
  { id: 3, name: "sushil", vill: "manikp" },
];

export default function Square() {
  //   const Chemist = people.filter((person) => person.name === "Chemists");
  //   const listItems = Chemist.map((person) => <li>{person.name}</li>);

  return (
    <>
      <h1>dkjflkdsjf</h1>

      <div>
        {people.map((post) => {
          return (
            <>
              <li key={post.id}>{post.name}</li>
            </>
          );
        })}
      </div>
    </>
  );
}
