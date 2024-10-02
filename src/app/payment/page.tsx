'use client'

import { useState } from 'react';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';

export default function Home() {
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [zip, setZip] = useState('');

    // const { tokenize } = usePaymentForm();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
        
    //     const token = await tokenize();
        
    //     if (token.status === 'OK') {
    //         console.log('Token:', token.token);
    //         // You can now send the token to your server for payment processing
    //     } else {
    //         console.error('Tokenization failed:', token.errors);
    //     }
    // };

    return (
        <div style={{ display: "grid", justifyContent: "center", alignContent: "center", height: "100vh", border: "5px solid black" }}>
            <PaymentForm
                applicationId="sandbox-sq0idb-LDe6WNrHC4BeRl9MV78UpA"
                locationId="LB9ZF5NBNEHVP"
                cardTokenizeResponseReceived={(token, verifiedBuyer) => {
                    console.log('Token:', token);
                    console.log('Verified Buyer:', verifiedBuyer);
                }}
            >
                <CreditCard
                
                    buttonProps={{
                        css: {
                            backgroundColor: "#771520",
                            fontSize: "14px",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#530f16",
                            },
                        }
                    }}
                />

            </PaymentForm>
        </div>
    )
}
