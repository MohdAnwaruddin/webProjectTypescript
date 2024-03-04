'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Data = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = localStorage.getItem('_id');
                if (id) {
                    const response = await axios.get(`http://localhost:3001/user/users/${id}`);
                    const userData = response.data;
                    setFormData({
                        username: userData.username || '',
                        email: userData.email || '',
                        password: userData.password || '',
                    });
                }
            } catch (err: any) {
                console.error(err);
                setError(err.response?.data?.errors || 'Something went wrong');
            }
        };

        fetchData();
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Specify the type of e
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const deleteuser = async () => {
        try {
            const id = localStorage.getItem('_id');
            const response = await axios.delete(`http://localhost:3001/user/users/${id}`);
            localStorage.removeItem('token');
            localStorage.removeItem('_id');
            router.push('/signup');
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Something went wrong');
            }
        }
    
      };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Specify the type of e
        e.preventDefault();
        // Your form submission logic goes here
    };

    return (
        <div className="login-form">
            <h1>Loged user data</h1>
            <form onSubmit={onSubmit}>
                <div>
                <label >User Name :</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        className="input-field"
                    />
                </div>
                <div>
                <label >E-mail :</label>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="input-field"
                    />
                </div>
                <div>
                <label >Current password :</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="input-field"
                    />
                </div>
                <div>
                <label >New password :</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value=""
                        onChange={onChange}
                        className="input-field"
                    />
                </div>
                {/* Display error message if there's an error */}
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="submit-button">Update </button>
                <br></br>
                <button onClick={deleteuser}>Delete</button>
            </form>
            
        </div>
    );
};

export default Data;
