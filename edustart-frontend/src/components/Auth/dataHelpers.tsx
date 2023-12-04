export const tokenKey = "fmt";
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(tokenKey, JSON.stringify(data));
    if (next) next();
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem(tokenKey)) {
    return localStorage.getItem(tokenKey);
  } else return false;
};

export const schoolAdminTokenKey = "afmt";
export const setAdminTokenInLS = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(schoolAdminTokenKey, JSON.stringify(data));
    if (next) next();
  }
};

export const getAdminTokenFromLS = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem(schoolAdminTokenKey)) {
    return localStorage.getItem(schoolAdminTokenKey);
  } else return false;
};
