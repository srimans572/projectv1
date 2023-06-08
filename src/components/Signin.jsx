import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className=''>
      <div>
        <h1 className=''>Sign in to your account</h1>
        <p className=''>
          Don't have an account yet?{' '}
          <Link to='/signup' className=''>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label className=''>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='' type='email' />
        </div>
        <div className=''>
          <label className=''>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='' type='password' />
        </div>
        <button className=''>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;