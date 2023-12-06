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
  query: {
    label: "City",
    options: [
      { label: "Jaipur", value: "jaipur" },
      { label: "Bangalore", value: "bangalore" },
      { label: "Gurgaon", value: "gurgaon" },
      { label: "Mumbai", value: "mumbai" },
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
