import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const CustomModal = ({ title, imageUrl, open, setOpen }) => {
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="text-center text-2xl py-4 font-bold">{title}</h2>
        <div className="w-[30vh] h-[40vh] md:w-[70vh] md:h-[80vh]">
          <img src={imageUrl} alt="nameplate" />
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
