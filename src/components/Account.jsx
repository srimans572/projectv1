import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../config/firebase';
import {doc, getDoc, updateDoc} from "firebase/firestore";
import { useState } from 'react';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [tokens, setTokens] = useState();
  const [docRef, setDocRef] = useState();

  useEffect(()=>{
    if (user){
        const {email} = user;
        try{
            setDocRef(doc(db, "users", user.email))
        }
        catch(error){
            console.log(error)
        }
    }
  }, [user])

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  const revealTokens = async () => {
    try{
        const docSnap = await getDoc(docRef);
        const token_data = docSnap.data();
        console.log(token_data["tokens"])
        setTokens(token_data["tokens"])
    }
    catch{

    }
  }

  const useToken = async () => {
    try{
        setTokens(tokens-1)
        await updateDoc (docRef,{
            tokens: tokens-1
        });
    }
    catch{

    }
    console.log(tokens)
  }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email} </p>
      <p>You have tokens: {tokens} </p>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
      <button onClick={revealTokens}>Reveal Tokens</button>
      <button onClick={useToken}>Use 1 Token</button>
    </div>
  );
};

export default Account;