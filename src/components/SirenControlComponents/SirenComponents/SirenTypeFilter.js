import "./SirenTypeFilter.css";

//filter za vrstu zvuka koji želimo da sirena proizvodi

const SirenTypeFilter = (props) => {
  const sirenTypesList = [
    {
      id: 0,
      type: "UOZORENJE NA NADOLAZEĆU OPASNOST",
    },
    {
      id: 1,
      type: "NEPOSREDNA OPASNOST",
    },
    {
      id: 2,
      type: "PRESTANAK OPASNOSTI",
    },
    {
      id: 3,
      type: "VATROGASNA UZBUNA",
    },
  ];

  const onFilterHandler = (e) => {
    props.getFilterValue(e.target.value);
  };

  return (
    <div>
      <select onChange={onFilterHandler} className="sirenTypeFilterStyle">
        {sirenTypesList.map((itemType) => {
          return (
            <option
              className="optionTypeFilter"
              value={itemType.id}
              key={itemType.id}
            >
              {itemType.type}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SirenTypeFilter;
