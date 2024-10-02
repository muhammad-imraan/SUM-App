'use client'

import PrimaryBtn from "@/app/ui/buttons/primary-btn";
import SocialLoginBtn from "@/app/ui/buttons/social-login-btn";
import Divider from "@/app/ui/divider";
import SwitcherInput from "@/app/ui/switch-input";
import TextInput from "@/app/ui/text-input";
import { Formik, Form } from 'formik';
import { useState } from "react";
import * as Yup from 'yup'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [btnStatus, setBtnStatus] = useState('Submit');

    return (
        <div className="flex min-h-screen flex-col items-center justify-center min-w-full">
            <div className="flex flex-col rounded w-full sm:px-16 px-8 border-b border-gray-300 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                <div className="text-3xl font-extrabold ...">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                        Welcome back!
                    </span>
                </div>
                <p>Enter your email and password to login.</p>



                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        remember: false
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(3, 'Must be at least 3 characters ')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
                        <div className="">
                            <TextInput
                                label=""
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="">
                            <TextInput
                                label=""
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                            />
                        </div>
                        <SwitcherInput
                            label="Remember me"
                            name="remember"
                            id="remember"
                            placeholder=""
                            text="Remember me for 30 days"
                            onChange={(e: any) => {
                                console.log(e.target.checked, 'eeeeeeeeeeeeeeeeee');
                            }}
                        />
                        <br />
                        <PrimaryBtn text={btnStatus} />
                    </Form>
                </Formik>
                <Divider to="center" text="or" style={{ color: 'lightgray' }} />
                <div className="py-2 flex sm:flex-row flex-col flex-wrap items-center text-sm text-gray-800 w-full">
                    <div className="md:w-1/2 w-full p-0 md:pr-1 hover:shadow"><SocialLoginBtn text="Login with Google" icon={<FcGoogle size={20} />} /></div>
                    <div className="md:w-1/2 w-full p-0 md:pl-1  hover:shadow"><SocialLoginBtn text="Login with Apple"  icon={<FaApple  size={20} />} /></div>
                </div>
                <p className="py-4 font-mono text-sm">Not a user? <a className="text-blue-900" href="/register">Register</a></p>
            </div>
        </div>
    )
}