import React from "react";
import { useMe } from "@hooks";
import { Helmet } from "react-helmet-async";
import { Form, StyledInput, StyledButton, ErrMsg } from "@components/FormComponents";
import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from "@constants";
import { UserProfileImage } from "@components";

type FormProps = {
    email?: string;
    password?: string;
}

const EditProfilePage = () => {
    const { data } = useMe()
    
    const { handleSubmit, register, formState, getValues } = useForm<FormProps>({
        mode: 'onChange',
        defaultValues: { email: data?.me.email }
    })
    const { errors, isValid } = formState;

    const onSubmit = () => {
        console.log(getValues())
    }

    return (
        <>
            <Helmet>
                <title> Edit Profile | Nuber-eats </title>
            </Helmet>
            <div className='px-4 xl:px-10 h-screen flex justify-center' >
                <div className='py-10 max-w-xl w-full xl:py-20 flex flex-col items-center'>
                    <h1 className='mb-6 text-3xl font-semibold select-none'> Edit Profile </h1>
                    <UserProfileImage size='lg' className='mb-6' />
                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <div className='flex flex-row items-center justify-between' >
                            <div className='w-20 mr-3 font-bold' >
                                Email
                            </div>
                            <StyledInput 
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: EMAIL_PATTERN
                                })}
                                type='email'
                                placeholder='Email' 
                                className='flex-1'
                            />
                        </div>
                        <div className='flex flex-row items-center justify-between' >
                            <div className='w-20 mr-3 font-bold' >
                                Password
                            </div>
                            <StyledInput 
                                {...register('password')}
                                type='password'
                                placeholder='Password' 
                                className='flex-1'
                            />
                        </div>
                        
                        { errors.email?.type === 'pattern' && <ErrMsg > 이메일 양식에 맞지 않습니다. </ErrMsg> }
                        { errors.email?.message && <ErrMsg > {errors.email.message} </ErrMsg> }
                        { errors.password?.message && <ErrMsg > {errors.password.message} </ErrMsg> }
                        <StyledButton isVaild={isValid} >
                            {/* { loading ? 'loading...' : 'Create Account' } */}
                            Edit Profile
                        </StyledButton>
                        {/* { createAccountMutationResult?.createUser.error && <ErrMsg > {createAccountMutationResult?.createUser.error} </ErrMsg> } */}
                    </Form>
                    
                </div>
            </div>
        </>
    )
}

export default EditProfilePage;