import React, { useState, useEffect, useContext } from "react";
import "./SkillList.css";
import SkillItem from "../../components/SkillItem/SkillItem";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const SkillList = ({ isHome, withIcons }) => {
  const { skills, setSkills, isEditing } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //display skills
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [isEditing]);


  //same as apiRequest ... + loading please wait
  const fetchData = () => {
    const url = "http://localhost:8000/skilovi";
    axios(url)
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading)
    return (
      <>
        <div className="loadingSkills">
          <p>Loading... please wait</p>
        </div>
      </>
    );
  if (error)
    return (
      <>
        <div className="errorSkills">
          <p>{error}</p>
        </div>
      </>
    );

  return (
    <div className={`${isHome ? "skill" : "skill-skills"}`}>
      <h2 className="skill__title">Skill List</h2>
      <div className="skill__data">
        <div className="skill__info">
          <h4 className="flex">Skill Name</h4>
          <h4 className="flex">Skill Year Required</h4>
          <h4 className="flex">Skill Rating</h4>
          {withIcons ? <h4 className="flex">CTA</h4> : null}
        </div>
      </div>

      {skills.map((item) => {
        return (
          <SkillItem
            key={item.id}
            id={item.id}
            name={item.skill}
            year={item.year}
            rating={item.rating}
            withIcons={withIcons}
          />
        );
      })}
    </div>
  );
};

export default SkillList;
