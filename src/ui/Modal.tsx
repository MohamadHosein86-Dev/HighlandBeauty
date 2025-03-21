import React, { cloneElement, createContext, ReactElement, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useOutsidClick from "../hooks/useOutsideClicl";

interface ModalProps {
  children: React.ReactNode;
}
interface OpenProps {
  openwindowName: string;
  children: ReactElement;
}
interface WindowProps {
  children: ReactElement;
  name: string;
  center?: boolean;
}
interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name:string)=>void;
}

export const Context = createContext<Partial<ModalContextType>>({});

export default function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open  = (name:string)=>{
    setOpenName(name);
  } 

  return (
    <Context.Provider value={{ openName, close, open }}>
      <div>{children}</div>
    </Context.Provider>
  );
}

function Open({ children, openwindowName }: OpenProps) {
  const { open } = useContext(Context);

  return cloneElement(children, { onClick: () => open?.(openwindowName) });
}

function Window({ children, name, center }: WindowProps) {
  const { openName, close = () => {} } = useContext(Context);
  const { modalRef } = useOutsidClick(close);
  const body = document.body;

  useEffect(() => {
    if (openName === name) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }

    return () => {
      body.style.overflowY = "scroll";
    };
  }, [openName, name, body]);

  return createPortal(
    <div className={`fixed top-0 left-0 w-full h-full bg-[#000000b3] bg-opacity-25 z-[10000] transition-opacity duration-300 ${openName === name ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div
        ref={modalRef}
        className={`bg-white h-full cursor-pointer z-[100]   shadow-lg fixed transition-all duration-300 opacity-0 transform  pointer-events-none ${
          center ?  "  top-[0]   sm:max-w-lg    right-[0rem] lg:right-[-.6rem]    " :
         "  top-[0]   sm:max-w-lg    left-[0rem] lg:left-[-.6rem]   "
        } ${openName === name ? "opacity-100 scale-100 pointer-events-auto" : ""}   `}
      >
        <div>{cloneElement(children, { CloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
