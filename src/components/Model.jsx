import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Model = forwardRef(function Model({ children, buttonCaption }, ref) {
  const refDialog = useRef();
  useImperativeHandle(ref, () => ({
    close() {
      refDialog.current.close();
    },
    open() {
      refDialog.current.showModal();
    },
  }));
  return createPortal(
    <dialog
      ref={refDialog}
      className="backdrop:bg-stone-900/90 p-8 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="flex justify-end font-extrabold">
        <button className=" bg-stone-400 rounded-md px-4 py-2 text-stone-50">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Model;
