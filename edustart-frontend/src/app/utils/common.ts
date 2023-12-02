export function ValidateEmail(mail) {
  if (!mail || mail.length < 2) return false;
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  //alert("You have entered an invalid email address!")
  return false;
}

export function validatePinCode(code) {
  if (/^[1-9]{1}[0-9]{2}[0-9]{3}$/.test(code)) return true;
  else return false;
}

export function validatePhone(phone) {
  if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone)) return true;
  else return false;
}

const USER_INFO = "USERINFO";
export function isUserDetailsInLS() {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem(USER_INFO)) return true;
    else return false;
  }
}

export function saveUserInLS(details) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(USER_INFO, JSON.stringify(details));
  }
}

export function getUserFromLS() {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(USER_INFO));
  }
}

const SUBMITTED_LIST = "SUBMITTED_LIST";
export function addToContactedList(schoolId) {
  if (typeof window !== "undefined") {
    let oldList = JSON.parse(window.localStorage.getItem(SUBMITTED_LIST));
    if (!oldList) {
      window.localStorage.setItem(SUBMITTED_LIST, JSON.stringify([schoolId]));
    } else
      window.localStorage.setItem(
        SUBMITTED_LIST,
        JSON.stringify(oldList.concat(schoolId))
      );
  }
}

export function isInSubmittedList(schoolId) {
  if (typeof window !== "undefined") {
    let list = JSON.parse(window.localStorage.getItem(SUBMITTED_LIST));
    if (list === null) return false;
    for (var index in list) {
      if (list[index] === schoolId) return true;
    }
    return false;
  }
}

export const setTokenInLS = (token: string) => {
  localStorage.setItem("fmt", token);
};
export const removeTokenFromLS = () => {
  localStorage.removeItem("fmt");
};
export const getTokenFromLS = () => {
  return localStorage.getItem("fmt");
};
// Function to remove empty values
export function removeEmptyValues(searchParams) {
  for (const [key, value] of searchParams.entries()) {
    if (value.trim().length === 0) {
      searchParams.delete(key);
    }
  }
}
