"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Initial({ updateStatus }: { updateStatus: any }) {
  const [drag, setDrag] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDrag(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDrag(false);
    updateStatus("uploading", "");
    const form = new FormData();
    form.append("file", e.dataTransfer.files[0]);
    form.append("upload_preset", "u2hz3nur");

    axios
      .post("https://api.cloudinary.com/v1_1/dy3tul7rq/image/upload", form)
      .then((resp) => {
        updateStatus("uploaded", resp.data.secure_url);
      })
      .catch((error) => {
        console.error(error.message, error.response.data.error.message);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      updateStatus("uploading", "");
      const form = new FormData();
      form.append("file", e.target.files[0]);
      form.append("upload_preset", "u2hz3nur");

      axios
        .post("https://api.cloudinary.com/v1_1/dy3tul7rq/image/upload", form)
        .then((resp) => {
          updateStatus("uploaded", resp.data.secure_url);
        })
        .catch((error) => {
          console.error(error.message, error.response.data.error.message);
        });
    }
  };

  return (
    <>
      <div className="text-gray-700 text-lg font-medium tracking-tight mb-4">
        Upload your image
      </div>
      <div className="text-gray-500 text-[10px] font-medium tracking-tight mb-7">
        File should be Jpeg, Png,...
      </div>
      <div
        className={`flex flex-col items-center rounded-xl border border-dashed border-[#97BEF4] bg-[#F6F8FB] mb-5 ${
          drag ? "opacity-100" : "opacity-70"
        }`}
        onDragOver={handleDrag}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Image
          className="mx-[112px] my-9"
          src="/image.svg"
          width={114}
          height={88}
          priority={true}
          alt="Default image"
        />

        <div className="mb-10 text-gray-400 text-xs font-medium tracking-tight">
          Drag & Drop your image here
        </div>
      </div>
      <div className="text-gray-400 text-center text-xs font-medium tracking-tight mb-8">
        Or
      </div>
      <div className="">
        <label
          htmlFor="image-upload"
          className="bg-[#2F80ED] rounded-lg py-2 px-4 cursor-pointer hover:bg-[#2D6BBA] text-white text-xs font-medium tracking-tight"
        >
          Choose a file
        </label>
        <input
          type="file"
          hidden
          name="image-upload"
          id="image-upload"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
