import "./AddRegion.css";
import TownButtonList from "../../SirenComponents/TownButtonList";
import AddRegionList from "./AddRegionList";

// dodavanje regija ** nedovrseno

const AddRegion = (props) => {
  const addSelectedRegion = () => {};

  const notAddedList = [...props.sirenInfo];
  const addedLIst = "";

  return (
    <div className="background">
      <AddRegionList item={notAddedList}></AddRegionList>
      <AddRegionList item={notAddedList}></AddRegionList>
    </div>
  );
};

export default AddRegion;
