import "./AddRegionList.css";

// dodavanje regija ** nedovrseno

const AddRegionList = (props) => {
  return (
    <div className="addRegionContainer">
      {props.item.map((item) => (
        <button key={item.id} className="addItemButton">
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default AddRegionList;
