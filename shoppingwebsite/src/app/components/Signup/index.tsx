
'use client';

import "./index.css";

import { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import AuthContext, { AuthContextType } from '@/context/AuthContext';

const Signup = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  const router = useRouter();
  const [formData2, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData2;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData2, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:3001/register',
        data,
        config
      );

      console.log('Registration successful');

       router.push('/login');
    } catch (e: any) {
      console.log('error ', e.message);
    }
  };
  return (
    <div  className="login-form">

      <h3 className="title"> Sign Up </h3>

      <p>Create Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='username'
            name='username'
            required
            value={username}
            onChange={(e) => onChange(e)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            className="input-field"
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            className="input-field"
          />
        </div>
        <div className="input-container">
         <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            className="input-field"
          />
        </div>

        <input type='submit' value='Register'  className="button"/>
        </div>
      </form>

      Already have an account?
      <p className="signin-link">
        <Link href='/login'>Sign In</Link>
      </p>
      </div >
  );
};

export default Signup;
