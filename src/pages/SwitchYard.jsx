import React, { useState } from "react";
import {
  busData,
  lineData,
  otherTransformerData,
  tgTransformerData,
  tieLineData,
} from "../data/switchyard/switchyardData";
import CustomModal from "../components/Modal/CustomModal";

const SwitchYard = () => {
  const [open, setOpen] = useState(false);
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentImageUrl, setEquipmentImageUrl] = useState("");
  const [equipmentData, setEquipmentData] = useState([]);
  const [otherTransformerDataToggle, setOtherTransformerDataToggle] =
    useState(false);
  const [tgTransformerDataToggle, setTgTransformerDataToggle] = useState(false);
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
            TG Transformers
            <button
              className="text-slate-800 font-bold border-2 px-2"
              onClick={() =>
                setTgTransformerDataToggle(!tgTransformerDataToggle)
              }
            >
              +
            </button>
          </div>
          {tgTransformerDataToggle ? (
            <div className="flex flex-wrap gap-2 md:gap-4 justify-around items-center py-10">
              {tgTransformerData.map(
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
        <div>
          <div className="w-[90vw] flex flex-row justify-around items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg text-3xl fond-bold">
            Bay-2,4 (Line-2)
            <button
              className="text-slate-800 font-bold border-2 px-2"
              onClick={() => setLineDataToggle(!lineDataToggle)}
            >
              +
            </button>
          </div>
          {lineDataToggle ? (
            <div className="flex flex-wrap gap-2 md:gap-4 justify-around items-center py-10">
              {lineData.map(({ id, title, description, imageUrl, data }) => (
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
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="w-[90vw] flex flex-row justify-around items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg text-3xl fond-bold">
            Bay-1,3 (Tie Line)
            <button
              className="text-slate-800 font-bold border-2 px-2"
              onClick={() => setTieLineDataToggle(!tieLineDataToggle)}
            >
              +
            </button>
          </div>
          {tieLineDataToggle ? (
            <div className="flex flex-wrap gap-2 md:gap-4 justify-around items-center py-10">
              {tieLineData.map(({ id, title, description, imageUrl, data }) => (
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
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="w-[90vw] flex flex-row justify-around items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg text-3xl fond-bold">
            Bay-5 (Bus Coupler)
            <button
              className="text-slate-800 font-bold border-2 px-2"
              onClick={() => setBusDataToggle(!busDataToggle)}
            >
              +
            </button>
          </div>
          {busDataToggle ? (
            <div className="flex flex-wrap gap-2 md:gap-4 justify-around items-center py-10">
              {busData.map(({ id, title, description, imageUrl, data }) => (
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
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="w-[90vw] flex flex-row justify-around items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg text-3xl fond-bold">
            Other Transformers{" "}
            <button
              className="text-slate-800 font-bold border-2 px-2"
              onClick={() =>
                setOtherTransformerDataToggle(!otherTransformerDataToggle)
              }
            >
              +
            </button>
          </div>
          {otherTransformerDataToggle ? (
            <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-around py-10">
              {otherTransformerData.map(
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

export default SwitchYard;
