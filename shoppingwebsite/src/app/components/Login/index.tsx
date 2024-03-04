
'use client';

import "./index.css";


import { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
 import AuthContext, { AuthContextType } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;


  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const data = {
        username: username,
        password: password,
      };

      try {
        const response = await axios.post(
          'http://localhost:3001/login',
          data,
          config
        );
        console.log(response.data.token);
        console.log(response.data.user._id);
        localStorage.setItem('_id', response.data.user._id);
        localStorage.setItem('token', response.data.token);

        auth.login();
        console.log("login successfull");
        router.push('/dashboard');
      } catch (err: any) {
        console.log(err);
        setError(err.response.data.errors || 'something went wrong');
      
    }
  };

  return (
    <div  className="login-form">
       <h1 className="title"> Log in to your account </h1>
      
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='username Address'
            name='username'
            value={username}
            onChange={(e) => onChange(e)}
            className="input-field"
          />
        </div>
        <div className="input-container">
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
        <input type='submit' value='Login' className="button"/>
        </div>
      </form>
      Don't have an account?
      <p className="register-link">
        <Link href='/signup'>Register</Link>
      </p>
      </div >
  );
};

export default Login;
