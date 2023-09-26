import googleIcon from "../../../assets/google.png";

export function Google() {
  return (
    <div className="p-5 bg-blue-800 flex justify-between">
      <div className="font-bold text-4xl text-white">
        Empower your career with <br />
        Internshala today
      </div>
      <div className="flex text-center items-center">
        <button className="px-5 py-3 rounded-md text-black bg-white font-bold text-xs flex mx-3 space-x-1 items-center text-center">
          <img src={googleIcon} className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>
        <button className="px-5 py-3 rounded-md text-white bg-blue-950 font-bold text-xs">
          Register now
        </button>
      </div>
    </div>
  );
}
export function ContinueWithGoogle() {
  return <Google />;
}
