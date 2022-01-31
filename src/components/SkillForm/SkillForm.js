import React, { useContext } from "react";
import "./SkillForm.css";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react/cjs/react.development";

const SkillForm = () => {
  const {
    skillName,
    skillYear,
    skillRating,
    setSkillName,
    setSkillYear,
    setSkillRating,
    submitSkill,
    isEditing,
    setIsEditing,
    alert,
    message,
  } = useContext(AppContext);

  // when loading skill form after editing ... clear inputs
  useEffect(() => {
    if (isEditing) {
      setIsEditing(false);
      setSkillName("");
      setSkillYear("");
      setSkillRating("");
    }
  }, []);

  return (
    <div className="skill__form">
      <h4 className="skill__title">Skill Form</h4>
      <form action="submit" className="form">
        {alert && <p className="alert">{message}</p>}

        <div className="formContainer">
          <div className="formContainer__div">
            <label htmlFor="skillName">Skill Name</label>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              name="skillName"
              className="form__input"
            />
            <label htmlFor="skillYear">Skill Year</label>
            <input
              type="number"
              value={skillYear}
              onChange={(e) => setSkillYear(e.target.value)}
              name="skillYear"
              className="form__input"
              placeholder="2010-2022"
            />
          </div>

          <div className="formContainer__div">
            <label htmlFor="skillRating">Skill Rating</label>
            <input
              type="number"
              value={skillRating}
              onChange={(e) => setSkillRating(+e.target.value)}
              min="0"
              max="10"
              name="skillRating"
              className="form__input"
              placeholder="from 1 to 5 ..."
            />
          </div>
        </div>

        <button type="submit" onClick={submitSkill} className="formBtn">
          {isEditing ? "Edit" : "Sumbit"}
        </button>
      </form>
    </div>
  );
};

export default SkillForm;
