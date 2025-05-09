import { db, app } from "../firebase/config"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(null);

  // cleanup function
  // deal with memory leak
  const [ cancelled, setCancelled ] = useState(false);
  
  const auth = getAuth(app);

  const checkIfIsCancelled = () => {
    if(cancelled) {
      return;
    }
  }

  // Register
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, { displayName: data.displayName });
      setLoading(false)
      return user;

    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      let systemErrorMessage

      if(error.message.includes("Password")){
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
      }else if(error.message.includes("email-already")){
        systemErrorMessage = "Email já cadastrado"
      }else {
        systemErrorMessage = "Ocorreu um erro, por favor entre mais tarde"
      }

      setLoading(false)
      setError(systemErrorMessage)
    }

  }

  const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
  }

  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      console.log(error.message.includes("user-not"));

      let systemErrorMessage;

      if(error.code === "auth/invalid-credential") {
        systemErrorMessage = "Credenciais inválidas. Verifique o e-mail e a senha."
      }
      else {
        systemErrorMessage = "Ocorreu um erro. Por favor, tente mais tarde."
      }

      console.log(systemErrorMessage);

      setError(systemErrorMessage);
    }

    console.log(error);

    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }

}