export const initialFilterState = {
  classification: [],
  board: [],
  fees: [],
  schoolType: [],
};

export const availableFilters = {
  classification: {
    label: "Classification",
    options: [
      { label: "Girls", value: "GIRLS" },
      { label: "Boys", value: "BOYS" },
      { label: "Co-ed", value: "COED" },
    ],
  },
  board: {
    label: "Board",
    options: [
      { label: "CBSE", value: "CBSE" },
      { label: "RBSE", value: "RBSE" },
      { label: "ICSE", value: "ICSE" },
    ],
  },
  fees: {
    label: "Annual Fees",
    options: [
      {
        label: "< 3 lacs",
        urlValue: "0-3lacs",
        value: {
          $gt: 0,
          $lt: 300000,
        },
      },
      {
        label: "3 lacs to 5 lacs",
        urlValue: "3-5lacs",
        value: {
          $gt: 300000,
          $lt: 500000,
        },
      },
      {
        label: "5 lacs +",
        urlValue: "5lacs+",
        value: {
          $gt: 500000,
        },
      },
    ],
  },
  schoolType: {
    label: "Type",
    options: [
      { label: "Day", value: "DAY" },
      { label: "Boarding", value: "BOARDING" },
      { label: "Play", value: "PLAY" },
      { label: "Pre-School", value: "PRE_SCHOOL" },
    ],
  },
};
