export default function AddingInteractivity() {
  return (
    <div>
      <Toolss
        Displsy={() => alert("display results")}
        Play={() => alert("play movie")}
      />

      <h1>dmdkl</h1>
    </div>
  );
}

function Toolss({ Displsy, Play }) {
  return (
    <>
      <div>
        <Buttons onClick={Displsy}>Displsy</Buttons>
        <Buttons onClick={Play}>Playing</Buttons>
      </div>
    </>
  );
}

function Buttons({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Helo</button>
    </div>
  );
}

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("Playing!")}
//       onUploadImage={() => alert("Uploading!")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>Play Movie</Button>
//       <Button onClick={onUploadImage}>Upload Image</Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }
