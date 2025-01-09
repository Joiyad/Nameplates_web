import React, { useState } from "react";
import {
  busData,
  lineData,
  otherTransformerData,
  tgTransformerData,
  tieLineData,
} from "../data/switchyard/switchyardData";
import CustomModal from "../components/Modal/CustomModal";
import { tg1Data } from "../data/tgHouse/tgHouseData";

const TGHouse = () => {
  const [open, setOpen] = useState(false);
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentImageUrl, setEquipmentImageUrl] = useState("");
  const [equipmentData, setEquipmentData] = useState([]);
  const [otherTransformerDataToggle, setOtherTransformerDataToggle] =
    useState(false);
  const [tg1Toggle, setTg1Toggle] = useState(false);
  const [tieLineDataToggle, setTieLineDataToggle] = useState(false);
  const [lineDataToggle, setLineDataToggle] = useState(false);
  const [busDataToggle, setBusDataToggle] = useState(false);

  const handleClick = (title, imageUrl, data) => {
    setEquipmentName(title);
    setEquipmentImageUrl(imageUrl);
    setEquipmentData(data);
    setOpen(true);
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center py-20">
        <div>
          <div className="w-[90vw] flex flex-row justify-around items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg text-3xl fond-bold">
            TG 1 Auxiliaries
            <button
              className="text-slate-800 font-bold border-2 px-2"
              onClick={() =>
                setTg1Toggle(!tg1Toggle)
              }
            >
              +
            </button>
          </div>
          {tg1Toggle ? (
            <div className="flex flex-wrap gap-2 md:gap-4 justify-around items-center py-10">
              {tg1Data.map(
                ({ id, title, description, imageUrl, data }) => (
                  <div
                    onClick={() => handleClick(title, imageUrl, data)}
                    key={id}
                    className="w-[100%] md:w-[40%] flex flex-col justify-center items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg cursor-pointer"
                  >
                    {/* <div className='w-[100px] h-[100px] pb-2'>
                        <img alt='img1' src={imageUrl} width="100%" />
                    </div> */}
                    <div className="text-center text-2xl md:text-3xl font-bold">
                      {title}
                    </div>
                    <div className="text-center text-1xl">{description}</div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <CustomModal
        open={open}
        setOpen={setOpen}
        title={equipmentName}
        imageUrl={equipmentImageUrl}
        data={equipmentData}
      />
    </div>
  );
};

export default TGHouse;
