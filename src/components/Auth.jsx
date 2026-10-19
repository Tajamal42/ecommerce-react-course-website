import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [mode, setMode] = useState("signup");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const {signUp, user, logout, login} = useContext(AuthContext);
    
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    function onSubmit(data) {
        setError(null);
        let result;
        if(mode === "signup") {
            result = signUp(data.email, data.password);
        } else {
            result = login(data.email, data.password);
        }

        if(result.success) {
            navigate("/");
        } else {
            setError(result.error);
        }

        console.log(result);
    }
  return (
    <div className='page'>
        <div className='container'>
            <div className='auth-container'>
                {user && <h1>user logged In: {user.email}</h1>}
                <button onClick={() => logout()}>Logout</button>
                <h1 className='page-title'>{mode === "signup" ? "Sign Up" : "Login"}</h1>
                <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
                    {error && <div className='error-message'>{errror}</div>}
                    <div className='form-group'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input className='form-input' type='email' id='email' {...register("email", {required: "Email is required"})} />
                        {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input className='form-input' type='password' id='password' {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            },
                            maxLength: {
                                value: 12,
                                message: "Password must be less than 12 characters",
                            }
                        })} />
                        {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
                    </div>
                    <button type="submit" className='btn btn-primary btn-large'>{mode === "signup" ? "Sign up" : "Login"}</button>
                </form>
                <div className='auth-switch'>
                       {mode === "signup" ? (
                        <p>Already have an account? <Link className='auth-link' onClick={() => setMode("login")}>Login</Link></p>
                        ) : (
                        <p>Don't have account? <Link className='auth-link' onClick={() => setMode("Signup")}>Signup</Link></p>
                        )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth