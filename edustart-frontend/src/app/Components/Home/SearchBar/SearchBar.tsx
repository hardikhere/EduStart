import { useState } from "react";

function SearchBar1() {
  const [cardDetails, setcardDetails] = useState({
    board: "CBSE",
    schoolType: "DAY",
  });

  const handleOnChange = (e) => {
    setcardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bar p-shadow-12 mx-auto">
      <div className="field" id="loc">
        <div className="title">Location</div>
        <div className="inputgroup">
          {/* <FormControl type="text" placeholder="Enter your location" /> */}
        </div>
      </div>
      <div className="field" id="board">
        <div className="title">Board</div>
        <div className="inputgroup">
          {/* <FormControl as="select" name="board"
            value={cardDetails.board}
            onChange={handleOnChange}>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="Other">State Board</option>
          </FormControl> */}
        </div>
      </div>
      <div className="field" id="type">
        <div className="title">Type</div>
        <div className="inputgroup">
          {/* <FormControl as="select" name="schoolType"
            value={cardDetails.schoolType}
            onChange={handleOnChange}>
            <option value="DAY">Day School</option>
            <option value="PLAY">Play School</option>
            <option value="BOARDING">Boarding School</option>
          </FormControl> */}
        </div>
      </div>
      <div className="w-100 mx-auto">
        {/* <Link to={`/search?board=${cardDetails.board}&schoolType=${cardDetails.schoolType}`}>
          <button className="p-ripple search">
            <i className="pi pi-search p-mr-2" style={{ color: "white" }}></i>
            Find Schools
            <Ripple />
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default SearchBar1;
