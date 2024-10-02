'use client'

import React, { useState } from 'react';
import axiosInstance from '@/lib/axios'

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/user', formData);
            console.log(response.data);
            
            setSuccess('Registration successful!');
            setError('');
            setFormData({ name: '', email: '', password: '' });
        } catch (error: any) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col p-8 rounded border-b border-gray-300 bg-gradient-to-b from-zinc-400 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                <h1 className="font-bold">Register here</h1>
                {error && <p className="text-red-700 text-[12px]">{error}</p>}
                {success && <p className="text-green-700 text-[12px]">{success}</p>}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="py-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded px-1 py-1 text-[12px] w-full"
                            required
                        />
                    </div>
                    <div className="py-4">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded px-1 py-1 text-[12px] w-full"
                            required
                        />
                    </div>
                    <div className="pb-4">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded px-1 py-1 text-[12px] w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="rounded bg-zinc-200 px-1 py-[1px] border border-gray-300 hover:bg-blue-100">
                        Submit
                    </button>
                </form>
                <p className="py-4 font-mono text-sm">Already registered? <a className="text-blue-900" href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
