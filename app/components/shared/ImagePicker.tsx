"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImagePicker = () => {
  const [previewImage, setPreviewImage] = useState<null | string>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="w-full h-52 border-dashed border-2 flexCenter overflow-hidden border-gray-100 rounded-lg">
      {previewImage ? (
        <Image
          src={previewImage}
          alt={"preview image"}
          width={700}
          height={700}
          className="w-full h-full object-cover"
        />
      ) : (
        <label>
          <div className="flexStart">
            <Image src={"/upload.svg"} alt="upload" width={18} height={18} />
            <h5 className="bold-16 text-gray-800 ml-2">upload image</h5>
          </div>
          <input type="file" className="hidden" onChange={onImageChange} />
        </label>
      )}
    </div>
  );
};

export default ImagePicker;
