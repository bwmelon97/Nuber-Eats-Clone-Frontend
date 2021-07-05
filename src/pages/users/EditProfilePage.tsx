import React from "react";
import { useMe } from "@hooks";
import { Helmet } from "react-helmet-async";
import { Form, StyledInput, StyledButton, ErrMsg } from "@components/FormComponents";
import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from "@constants";
import { UserProfileImage } from "@components";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { EditProfileMutation, EditProfileMutationVariables } from "@gql-types/EditProfileMutation";

const EDIT_PROFILE_MUTATION = gql`
    mutation EditProfileMutation ($input: EditProfileInput!) {
        editProfile(input: $input) {
            ok
            error
        }
    }
`;

type FormProps = {
    email?: string;
    password?: string;
}

const EditProfilePage = () => {
    const { data: userData } = useMe()
    const client = useApolloClient();

    const onCompleted = (data: EditProfileMutation) => {
        const { editProfile: { ok } } = data;
        if ( ok && userData ) {
            const { 
                me: { id, email: prevEmail } 
            } = userData
            const newEmail = getValues('email');

            if ( prevEmail !== newEmail ) {
                client.cache.writeFragment({
                    id: `User:${id}`,
                    fragment: gql`
                        fragment UdatedUser on User {
                            email
                        }
                    `,
                    data: { email: newEmail }
                })
            }

            window.alert("변경사항이 저장되었습니다 😊")
        }
    }

    const [ editProfile, { loading, data: editProfileData } ] = useMutation<
        EditProfileMutation, 
        EditProfileMutationVariables
    >(EDIT_PROFILE_MUTATION, { onCompleted })

    const { handleSubmit, register, formState, getValues } = useForm<FormProps>({
        mode: 'onChange',
        defaultValues: { email: userData?.me.email }
    })
    const { errors, isValid } = formState;

    const onSubmit = () => {
        const { email, password } = getValues();
        if (!loading) {
            editProfile({
                variables: {
                    input: {
                        email, ...( password && { password })
                    }
                }
            })
        }
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
                            { loading ? 'loading...' : 'Edit Profile' }
                        </StyledButton>
                        { editProfileData?.editProfile.error && <ErrMsg > {editProfileData?.editProfile.error} </ErrMsg> }
                    </Form>
                    
                </div>
            </div>
        </>
    )
}

export default EditProfilePage;