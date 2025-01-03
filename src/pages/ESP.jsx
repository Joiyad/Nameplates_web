import React, { useState } from "react";
import CustomModal from "../components/Modal/CustomModal";
import { espData } from "../data/esp/espData";

const ESP = () => {
  const [open, setOpen] = useState(false);
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentImageUrl, setEquipmentImageUrl] = useState("");
  const [equipmentData, setEquipmentData] = useState([])

  const handleClick = (title, imageUrl, data) => {
    setEquipmentName(title)
    setEquipmentImageUrl(imageUrl)
    setEquipmentData(data)
    setOpen(true)
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center py-20 md:py-40">
        {espData.map(({ id, title, description, imageUrl, data }) => (
          <div onClick={() => handleClick(title, imageUrl, data)} key={id} className="w-[100%] md:w-[40%] flex flex-col justify-center items-center p-4 md:p-6 gap-2 md:gap-4 shadow-lg hover:shadow-2xl rounded-lg">
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
      <CustomModal open={open} setOpen={setOpen} title={equipmentName} imageUrl={equipmentImageUrl} data={equipmentData}/>
    </div>
  );
};

export default ESP;
