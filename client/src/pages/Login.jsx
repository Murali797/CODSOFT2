import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';
import Textbox from '../components/Textbox';
import Button from '../components/Button';

const dummyUser = {
  email: 'user@example.com',
  token: 'dummy_token',
};

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = (data) => {
    if (data.email === dummyUser.email) {
      dispatch(setUser(dummyUser)); // Store user in Redux
      navigate('/dashboard'); // Redirect to Dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    if (user?.token) {
      navigate('/dashboard'); // Redirect if user exists
    }
  }, [user, navigate]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        <div className='w-full h-full ld:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
              Manage all your tasks in one place
            </span>
            <p className='flex flex-col gap-0 md:gap-8 text-4xl md:text-7xl font-black text-center text-blue-700'>
              <span>Cloud-Based</span>
              <span>Project Manager</span>
            </p>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form onSubmit={handleSubmit(submitHandler)} className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'>
            <div>
              <p className='text-blue-600 text-3xl font-bold text-center'>Welcome back!</p>
              <p className='text-center text-base text-gray-700'>Use the dummy credentials to log in.</p>
            </div>
            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register('email', { required: 'Email Address is required!' })}
                error={errors.email ? errors.email.message : ''}
              />
              <Button type='submit' label='Submit' className='w-full h-10 bg-blue-700 text-white rounded-full' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
