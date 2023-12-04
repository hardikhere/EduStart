import { removeTokenFromLS } from "@/utils/common";
import useUserByToken from "@/hooks/useUserFromToken";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the structure of the user data
interface User {
  isVerified: boolean;
  _id: string;
  email: string;
}

// Define the structure of the context
interface UserContextProps {
  user: User | null;
  setUser: (userData: User) => void;
  logoutUser: () => void;
}

// Create the initial context value
const initialUserContext: UserContextProps = {
  user: null,
  setUser: () => {}, // Initial empty function
  logoutUser: () => {},
};

// Create the UserContext
export const UserContext = createContext<UserContextProps>(initialUserContext);

// UserContext provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const { data }: { data: any } = useUserByToken();

  // Function to set user details
  const setUserDetails = (userData: User) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
    removeTokenFromLS();
  };

  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
    }
  }, [data]);

  const contextValue: UserContextProps = {
    user,
    logoutUser,
    setUser: setUserDetails,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Custom hook to access user details from the context
export const useUserDetails = () => {
  const { user, setUser, ...rest } = useContext(UserContext);

  if (user === undefined || setUser === undefined) {
    throw new Error("useUserDetails must be used within a UserProvider");
  }

  return { user, setUser, ...rest };
};
