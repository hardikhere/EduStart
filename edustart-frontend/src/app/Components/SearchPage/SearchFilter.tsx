import React, { useState } from "react";
import qs from "query-string";
import { useHistory } from "react-router-dom";

const SearchFilter = () => {
  const parsedqs = qs.parse(window.location.search);
  const history = useHistory();
  const [SearchFilterState, setSearchFilterState] = useState({
    classification: [],
    board: [],
    fees: [],
    schoolType: [],
  });

  const [AvailableFilters, setAvailableFilters] = useState({
    classification: ["GIRLS", "BOYS", "COED"],
    board: ["CBSE", "ICSE", "Other"],
    fees: [
      {
        tag: "< 3 lacs",
        feeFrom: 0,
        feeTo: 300000,
      },
      {
        tag: "3 lacs to 5 lacs",
        feeFrom: 300000,
        feeTo: 500000,
      },
      {
        tag: "5 lacs +",
        feeFrom: 500000,
        feeTo: Number.MAX_SAFE_INTEGER,
      },
    ],
    schoolType: ["DAY", "BOARDING", "PLAY", "PRE_SCHOOL"],
  });

  const handleFilterInclude = (name, el) => {
    console.log(SearchFilterState);
    if (window.location.search.includes(el)) {
      setSearchFilterState({
        ...SearchFilterState,
        [name]: SearchFilterState[name].filter((e) => {
          if (e === el) return false;
          else return true;
        }),
      });
      let index = parsedqs[name]?.indexOf(el);
      let newSearchString =
        parsedqs[name]?.substr(0, index) +
        parsedqs[name]?.substr(index + el.length + 1, parsedqs[name].length);
      if (newSearchString.length === 0) {
        delete parsedqs[name];
        history.push({
          pathname: "/search",
          search: new URLSearchParams({
            ...parsedqs,
          }).toString(),
        });
      } else
        history.push({
          pathname: "/search",
          search: new URLSearchParams({
            ...parsedqs,
            [name]: newSearchString,
          }).toString(),
        });
    } else {
      history.push({
        pathname: "/search",
        search: new URLSearchParams({
          ...parsedqs,
          [name]: parsedqs[name] ? parsedqs[name] + `,${el}` : el,
        }).toString(),
      });
      console.log("not inluded including");
      setSearchFilterState({
        ...SearchFilterState,
        [name]: SearchFilterState[name].concat(el),
      });
    }
  };

  const handleFeeFilter = (el) => {
    if (parseInt(parsedqs.feeTo) === el.feeTo) {
      var newObj = parsedqs;
      delete newObj.feeFrom;
      delete newObj.feeTo;
      history.push({
        pathname: "/search",
        search: new URLSearchParams(newObj).toString(),
      });
      return;
    }
    history.push({
      pathname: "/search",
      search: new URLSearchParams({
        ...parsedqs,
        feeTo: el.feeTo,
        feeFrom: el.feeFrom,
      }).toString(),
    });
  };
  return (
    <div className="filterbox">
      <h5 className="filterbox-heading">Customize Search:</h5>
      <div className="filterbox-item">
        <h6>Classification</h6>
        <div className="d-flex flex-wrap">
          {AvailableFilters.classification.map((el) => {
            return (
              <div
                key={`${el}`}
                onClick={() => handleFilterInclude("classification", el)}
                className={`filterbox-btn
                            ${
                              window.location.search.includes(el)
                                ? "btn-selected"
                                : ""
                            }`}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
      <div className="filterbox-item">
        <h6>Board</h6>
        <div className="d-flex flex-wrap">
          {AvailableFilters.board.map((el) => {
            return (
              <div
                onClick={() => handleFilterInclude("board", el)}
                className={`filterbox-btn
                            ${
                              window.location.search.includes(el)
                                ? "btn-selected"
                                : ""
                            }`}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>

      <div className="filterbox-item">
        <h6>Annual Fees</h6>
        <div className="d-flex flex-wrap">
          {AvailableFilters.fees.map((el) => {
            return (
              <div
                key={`${el}`}
                onClick={() => handleFeeFilter(el)}
                className={`filterbox-btn
                            ${
                              parseInt(parsedqs.feeTo) === el.feeTo &&
                              "btn-selected"
                            }`}
              >
                {el.tag}
              </div>
            );
          })}
        </div>
      </div>

      <div className="filterbox-item">
        <h6>School Type</h6>
        <div className="d-flex flex-wrap">
          {AvailableFilters.schoolType.map((el) => {
            return (
              <div
                key={`${el}`}
                onClick={() => handleFilterInclude("schoolType", el)}
                className={`filterbox-btn
                            ${
                              window.location.search.includes(el)
                                ? "btn-selected"
                                : ""
                            }`}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
