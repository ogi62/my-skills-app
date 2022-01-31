import React from "react";
import "./Home.css";
import Bio from "../../components/Bio/Bio";
import SkillList from "../../components/SkillList/SkillList";
import Graph from "../../components/Graph/Graph";

const Home = () => {
  return (
    <div className="home">
      <div className="home__bio">
        <Bio />
        <Graph />
      </div>
      <div className="home__skills">
        <SkillList withIcons={false} isHome={false}/>
      </div>
    </div>
  );
};

export default Home;
