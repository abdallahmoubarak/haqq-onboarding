import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const UploadFirmImg = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <>
      <label htmlFor="fileUpload">
        <div
          className="upload-container primary-color pointer"
          style={{
            backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
            backgroundSize: "cover"
          }}
        >
          {" "}
          {!selectedImage && (
            <>
              <div className="upload-user-icon">
                <img src="/img/firmImage.svg" alt="" width={120} height={120} />
              </div>
              <div className="flex upload-btn">
                <div className="upload-icon">
                  <FiUpload />
                </div>
                <div>
                  <div className="bold primary no-wrap font-md">
                    Upload Firm Logo
                  </div>
                  <div className="font-sm">Max. 1.5Mb</div>
                </div>
              </div>
            </>
          )}
        </div>
      </label>
      <input
        hidden
        type="file"
        id="fileUpload"
        accept="image/*"
        onChange={handleImageChange}
      />
      <style jsx>{`
        .upload-container {
          background: rgba(223, 208, 216, 0.5);
          padding: 2rem 1.6rem;
          margin: auto;
          border-radius: 1rem;
          height: 16rem;
        }
        .upload-btn {
          border-radius: 40rem;
          border: 1px solid #650e3d;
          cursor: pointer;
          padding: 0.2rem 1.6rem;
        }
        .font-sm {
          font-size: 0.8rem;
        }
        .upload-icon {
          font-size: 1.2rem;
        }
        .upload-user-icon {
          margin: auto;
          width: fit-content;
          padding-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default UploadFirmImg;
