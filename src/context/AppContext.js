import React, { createContext, useState } from "react";
import apiRequest from "../apiRequest/apiRequest";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [skillYear, setSkillYear] = useState("");
  const [skillRating, setSkillRating] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  //CHECK FORM INPUTS
  const checkForm = (name, year, rating) => {
    if (name === "" || year === "" || rating === "") {
      setAlert(true);
      setMessage("Inputs are empty");
    } else if (name.length < 3 || name.length > 17) {
      setAlert(true);
      setMessage("Skill name must have min 3 max 16 charachters");
    } else if (year.length !== 4) {
      setAlert(true);
      setMessage("Skill Year must have 4 charachters");
    } else if (year < 2010 || year > 2023) {
      setAlert(true);
      setMessage("Skill Year must be from 2010 - 2022");
    } else if (rating > 5) {
      setAlert(true);
      setMessage("Skill Rating must be from 1 to 5");
    }

    setTimeout(() => {
      setAlert(false);
      setMessage("");
    }, 1500);
  };

  // POST NEW SKILL
  const submitSkill = (e) => {
    e.preventDefault();

    const API_URL = "http://localhost:8000/skilovi";

    //First check form inputs
    if (!skillName || !skillYear || !skillRating) {
      checkForm(skillName, skillYear, skillRating);
    } else if (skillYear.length !== 4) {
      checkForm(skillName, skillYear, skillRating);
    } else if (skillYear < 2010 || skillYear > 2023) {
      checkForm(skillName, skillYear, skillRating);
    } else if (skillName.length < 3 || skillName.length > 17) {
      checkForm(skillName, skillYear, skillRating);
    } else if (skillRating > 5) {
      checkForm(skillName, skillYear, skillRating);
    } else {
      //if inputs are ok ... make object
      const newSkill = {
        id: Math.floor(Math.random() * 1000000),
        skill: skillName,
        year: skillYear,
        rating: skillRating,
      };

      //put obj in new arr
      const myNewSkills = [...skills, newSkill];

      setSkills(myNewSkills);

      // put in db.json
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSkill),
      };
      apiRequest(API_URL, postOptions);
    }

    // empty inputs ...
    setSkillName("");
    setSkillYear("");
    setSkillRating("");
    setIsEditing(false);
  };

  //function for delete
  const handleDelete = (id) => {
    const API_URL = "http://localhost:8000/skilovi";

    // all skills - one that i clicked
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);

    // delete that one that i clicked
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    apiRequest(reqUrl, deleteOptions);
  };

  // function for edit
  const handleEdit = (id) => {
    //find one that i clicked
    const editSkill = skills.find((skill) => skill.id === id);

    // input fields ...
    setSkillName(editSkill.skill);
    setSkillYear(editSkill.year);
    setSkillRating(editSkill.rating);

    const API_URL = "http://localhost:8000/skilovi";

    //url for single skill
    const reqUrl = `${API_URL}/${id}`;

    // delete that one from db.json
    const deleteOptions = { method: "DELETE" };

    //remove single skill from skill list
    apiRequest(reqUrl, deleteOptions);

    setIsEditing(true);
  };

  return (
    <AppContext.Provider
      value={{
        skills,
        setSkills,
        skillName,
        skillYear,
        skillRating,
        setSkillName,
        setSkillYear,
        setSkillRating,
        submitSkill,
        checkForm,
        handleDelete,
        handleEdit,
        isEditing,
        setIsEditing,
        alert,
        setAlert,
        message,
        setMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
