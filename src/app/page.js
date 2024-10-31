"use client";

import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const formData = new FormData();
  formData.append("cloud_name", "dji4x37my");
  formData.append("file", file);
  formData.append("upload_preset", "lxxshg");

  const upload = async () => {
    const datas = await fetch(
      "https://api.cloudinary.com/v1_1/dji4x37my/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await datas.json();
    console.log(data);
    setImage(data.secure_url);
  };

  return (
    <div className="all">
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={() => upload()}>UPLOAD</button>
      {image ? <img src={image} style={{ width: 200 }} /> : null}
    </div>
  );
};
export default Page;
