import "../Skill";
import Skill from "../Skill";
import data from "../../data/data.json";
import "../Skills/style.scss";

function Skills() {
  return (
    <div className="skills-container">
      <span className="skills-title">Skills</span>
      <div className="skills-wrapper">
        {data.map((skill, key) => {
          return <Skill key={key} skill={skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
