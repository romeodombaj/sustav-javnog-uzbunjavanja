import "./RegionList.css";
import SingleRegion from "./SingleRegion";

// izlistavanje svih regija

const RegionList = (props) => {
  return (
    <div>
      <h2>REGIONS</h2>
      {props.sirenInfo.map((siren) => (
        <SingleRegion key={siren.id} sirenInfo={siren}></SingleRegion>
      ))}
    </div>
  );
};

export default RegionList;
