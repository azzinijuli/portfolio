import "../Skill/style.scss";

function Skill(props) {
  const { title, img } = props.skill;
  return (
    <>
      <div className="skill">
        <div className="skill-image-container">
          <img src={img} alt="logo" className="skill-image" />
        </div>
        <div className="skill-name">
          <p className="text">{title}</p>
        </div>
      </div>
    </>
  );
}

export default Skill;
