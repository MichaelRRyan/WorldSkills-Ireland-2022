import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  retrieveUserDocument,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        var userSnapshot = await retrieveUserDocument(user);
        if (userSnapshot && userSnapshot.exists()) {
          user = {
            ...user,
            ...userSnapshot.data(),
          };
        }
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
