import { Dialog, Transition } from "@headlessui/react";
import { MessageOutlined, PersonPin } from "@mui/icons-material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

export default function UserMessage() {
  let [isOpen, setIsOpen] = useState(true);
  const [click, setClick] = useState(false);
  const userData = useSelector((state) => state.userSlice.userData);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const clickme = () => {
    console.log(click);
    setClick("Hello");
  };

  return (
    <>
      <div className="justify-between  flex p-10">
        <div>
          <div className="flex rounded-xl border ">
            <button className="hover:bg-indigo-500 " onClick={clickme}>
              All message
            </button>
            <button className="bg-indigo-300 px-2">Unread{}</button>
          </div>
        </div>
        <div>amS</div>
      </div>
    </>
  );
}
