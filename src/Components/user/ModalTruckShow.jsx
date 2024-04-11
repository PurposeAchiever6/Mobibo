import React ,{useState} from 'react'

const ModalTruckShow = () => { 
const [truckModalSide ,setTruckModalSide] = useState("side");
const [viewModalType ,setViewModalType] = useState("2d");
const [selectedImageModalSide, setSelectedImageModalSide] = useState(null);
const [selectedImageModalBack, setSelectedImageModalBack] = useState(null);
const [fileSpecsModalSide , setFileSpecsModalSide] = useState();
const [fileSpecsModalBack , setFileSpecsModalBack] = useState();
const [fileTypeModalSide , setFileTypeModalSide] = useState();
const [fileTypeModalBack , setFileTypeModalBack] = useState();

const handleFileChangeModalSide = (event) => {
  const modalFile = event.target.files[0]; 
  setSelectedImageModalSide(modalFile);
  setFileSpecsModalSide(convertBytesToMB(modalFile.size));
  setFileTypeModalSide(modalFile.type)
};

const convertBytesToMB = (bytes) => {
  return (bytes / (1024 * 1024)).toFixed(2); // Convert bytes to megabytes with 2 decimal places
};

const handleFileChangeModalBack = (event) => {
    const modalFile = event.target.files[0];
    setSelectedImageModalBack(modalFile);
    setFileSpecsModalBack(convertBytesToMB(modalFile.size));
    setFileTypeModalBack(modalFile.type)

  };
  return (
    <div>
              <div className=" w-[100%] max-w-[1280px] m-auto">
        <div className="flex lg:flex-row flex-col w-[100%] gap-[40px] pb-[0px] md:pb-[100px]  justify-between">
                <div className="lg:w-[400px] w-[90%] ml-4">
                  <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px]">
                    <button
                      className={
                        truckModalSide === "side"
                          ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                          : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                      }
                      onClick={() => setTruckModalSide("side")}
                    >
                      Side
                    </button>
                    <button
                      className={
                        truckModalSide === "back"
                          ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                          : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                      }
                      onClick={() => setTruckModalSide("back")}
                    >
                      Back
                    </button>
                  </div>
                  <div className="bg-[#f9ff8a] rounded-full flex w-[100%] p-[2px] mt-[10px]">
                    <button
                      className={
                        viewModalType === "2d"
                          ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                          : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                      }
                      onClick={() => setViewModalType("2d")}
                    >
                      2D
                    </button>
                    <button
                      className={
                        viewModalType === "3d"
                          ? "bg-[#a57bff] text-[#fff] rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                          : "rounded-full w-[50%] font-inter font-[600] text-[12px] leading-[16px] tracking-[0.05px] py-[6px]"
                      }
                      onClick={() => setViewModalType("3d")}
                    >
                      3D
                    </button>
                  </div>
                  {truckModalSide === "side" ?
                  <div className="bg-[#fff] rounded-lg p-4 mt-[10px] ">
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Screen</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">11.5x6.5’</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Available for</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">Video/Image</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">File Formats</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">{fileTypeModalSide ? fileTypeModalSide : "MP4/MOV/JPEG"}</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Min Resolution</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">1280x720px</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Max File Size</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">{fileSpecsModalSide ? fileSpecsModalSide+'mb' : "50mb"}</div>
                  </div>
                    </div>
                  : 
                  <div className="bg-[#fff] rounded-lg p-4 mt-[10px] ">
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Screen</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">11.5x6.5’</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Available for</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">Video/Image</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">File Formats</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">{fileTypeModalBack ? fileTypeModalBack : "MP4/MOV/JPEG"}</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Min Resolution</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">1280x720px</div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-b-[#9c9c9f] py-[10px]">
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#9c9c9f]">Max File Size</div>
                  <div className="font-inter font-[400] text-[16px] leading-[20px] tracking-[-0.5px] text-[#000]">{fileSpecsModalBack ? fileSpecsModalBack+"mb" : "50mb"}</div>
                  </div>
                    </div>}
                  <div className="w-[100%] mt-[10px] flex justify-center">
                    {truckModalSide ==='side'?
                    <input
                      type="file"
                      id="uploadfileModal"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleFileChangeModalSide}
                      multiple
                      style={{ display: "none" }} // Hide the default file input
                    />
                  :
                  <input
                      type="file"
                      id="uploadfileModal"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleFileChangeModalBack}
                      multiple
                      style={{ display: "none" }} // Hide the default file input
                    />}
                    <label
                      htmlFor="uploadfileModal"
                      className="w-[100%] py-[10px] px-4 text-[#fff] text-center font-inter bg-[#ff80fd] rounded-lg cursor-pointer"
                    >
                      Upload
                    </label>
                  </div>

                  </div>
                {viewModalType === "2d" ? (
                  truckModalSide === "side" ? (
                    <div className="lg:w-[83%] w-[100%]  truckShow-bg-side p-4 lg:px-[55px] px-[25px] lg:h-[412px] h-[198px] ">
                      {selectedImageModalSide && ( // Display image preview if an image is selected
                        <img
                          src={URL.createObjectURL(selectedImageModalSide)}
                          alt="Selected"
                          width={300}
                          height={100}
                          className="lg:h-[276px] h-[99px] lg:w-[491px] w-[169px] mt-[-10px] lg:mt-[2px] lg:ml-[6px]"
                          style={{ borderTopRightRadius: "13px" }}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="lg:w-[83%] w-[100%]  truckShow-bg-back p-4  lg:pl-[299px] pl-[70px] h-[293px] lg:h-[400px]">
                      {selectedImageModalBack && (
                        <img
                          src={URL.createObjectURL(selectedImageModalBack)}
                          alt="Selected"
                          width={300}
                          height={100}
                          className="lg:h-[271px] h-[164px] lg:w-[294px] w-[172px] lg:ml-[0px] lg:mt-[0px] mt-[20px]"
                        />
                      )}
                    </div>
                  )
                ) : (
                  <div className="lg:w-[70%] w-[100%]">
                   Coming soon!
                  </div>
                )}
                </div>
          </div>
    </div>
  )
}

export default ModalTruckShow
