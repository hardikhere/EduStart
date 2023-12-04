export const saveUserDetailsInLS = (data: Object) => {
  localStorage.setItem("userContact", JSON.stringify(data));
};

export const getUserDetailsFromLS = () => {
  return JSON.parse(localStorage.getItem("userContact") ?? "{}");
};

export const saveSavedSchoolsInLS = (school: string) => {
  const schools = getSavedSchools();
  localStorage.setItem(
    "savedSchools",
    schools.length > 0 ? schools.concat(`,${school}`) : school
  );
};
export const isSchoolSaved = (school: string) => {
  const schools = getSavedSchools();
  return schools.includes(school);
};

export const getSavedSchools = () => {
  return localStorage.getItem("savedSchools") ?? "";
};
