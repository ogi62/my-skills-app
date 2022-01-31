import React from "react";
import SkillList from "../../components/SkillList/SkillList";
import SkillForm from "../../components/SkillForm/SkillForm";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <SkillList isHome={true} withIcons={true} />
      <SkillForm />
    </div>
  );
};

export default Skills;
