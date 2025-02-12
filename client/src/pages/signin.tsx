import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../app/store'; // Adjust the import according to your project structure
import { signin } from '../services/operations/auth/api';

// Custom hook to use typed selector


interface FormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const {loading} =  useTypedSelector((state)=>state.auth);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('form data',formData);
    dispatch(signin({userName:formData.username,password:formData.password}))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome back to Second-Brain</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4 text-right">
            <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
           {
            loading ? "Loading..." :  "Sign In"
           }
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account? 
            <Link to="/signup" className="text-blue-500 hover:underline"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;