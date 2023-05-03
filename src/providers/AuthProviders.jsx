import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const singInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const createWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, imgUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [loading]);

  const authInfo = {
    singInWithGoogle,
    singInWithGithub,
    createWithEmailPassword,
    singInWithEmail,
    logOut,
    user,
    updateUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
