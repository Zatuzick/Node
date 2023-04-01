import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser, signin } from '../api/auth';
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate();
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>();
    const onSubmit = async (input: any) => {
        const { data } = await signin(input)
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/admin/')
    }
    return (
        <div>
            <h2>Signin</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" {...register("email", { required: true })} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" {...register("password", { required: true })} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signin