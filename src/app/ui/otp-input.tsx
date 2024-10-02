'use client'

import React, { useState, useRef } from 'react';

export default function OTPInput() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input if value is entered
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }

            if (index === 3 && newOtp.every((digit) => digit !== '')) {
                handleSubmit(newOtp);
            }
        }
    };

    const handleSubmit = (otpCode: string[]) => {
        const otpString = otpCode.join('');
        console.log('OTP Submitted: ', otpString);
        // Trigger your form submission logic here, e.g., send it to an API
    };
    const handleResend = () => {
        // Trigger your resend logic here, e.g., send it to an API
        console.log('Resend clicked');
        
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="text-3xl font-bold">
                Enter code
            </div>
            <p className="text-[12px] pt-2 pb-8">Enter the code that was sent to your email</p>
            <div className="flex">
                {otp.map((value, index) => (
                    <input
                        key={index}
                        ref={(el) => inputRefs.current[index] = el}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="bg-white bg-opacity-30 border w-12 font-bold text-white text-[25px] h-12 border-gray-300 rounded px-1 py-1 w-12 mr-1 text-center"
                    />
                ))}
            </div>
            <p className="text-[12px] pt-4">Didn't receive the code? click here to <span className="font-bold cursor-pointer text-yellow-300" onClick={handleResend}>resend</span></p>
        </div>
    );
}
