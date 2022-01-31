import React, { useContext } from "react";
import "./SkillItem.css";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";

const SkillItem = ({ id, name, year, rating, withIcons }) => {
  const { handleDelete, handleEdit } = useContext(AppContext);

  return (
    <div className="skillItem">
      <span className="flex flexName">{name}</span>
      <div className="containerMobile">
        <span className="flex">{year}</span>
        <span className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </span>
      </div>

      {withIcons ? (
        <div className="flex flexIcons">
          <BiEdit onClick={(e) => handleEdit(id)} />
          <MdDelete onClick={(e) => handleDelete(id)} />
        </div>
      ) : null}
    </div>
  );
};

export default SkillItem;
