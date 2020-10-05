import React, { useEffect, useState } from "react";
import "./Item.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Item(props) {
  const [isUploaded, setIsUploaded] = useState(props.isUploaded);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        className={`${isUploaded ? "Item" : "ItemIsUploading"}`}
      >
        <AiOutlineCloseCircle color="gray" className="Icon" />
        <img
          alt="profileIcon"
          className="Image"
          height="120"
          width="120"
          src={require("../../images/profile.jpg")}
        />
      </div>
      {openModal && (
        <div className="Modal">
          <AiOutlineCloseCircle
            onClick={() => setOpenModal(false)}
            color="gray"
            className="Icon modal-icon"
            size={50}
          />
          your account is{" "}
          {isUploaded ? (
            <span>uploaded!</span>
          ) : (
            <span>in uploading process but you can continue</span>
          )}
        </div>
      )}
    </>
  );
}
