import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const CustomModal = ({ title, imageUrl, open, setOpen, data }) => {
  const onCloseModal = () => setOpen(false);
  const [zoom, setZoom] = useState(false);

  const handleImageClick = () => {
    setZoom(!zoom);
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-[90vh] bg-white flex flex-col">
          <h2 className="text-center text-2xl py-4 font-bold">{title}</h2>
          <div className="">
            <img
              className={`cursor-pointer transition-transform duration-300 ${
                zoom ? "scale-125" : "scale-100"
              }`}
              onClick={handleImageClick}
              src={imageUrl}
              alt="nameplate"
            />
          </div>
          <div className="p-4">
            <table className="min-w-full bg-white border border-gray-200 shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2 border-b">Name</th>
                  <th className="text-left px-4 py-2 border-b">Value</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{item.name}</td>
                    <td className="px-4 py-2 border-b">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
