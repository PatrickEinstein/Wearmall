import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const StripeCheckOutButton = ({price} ) =>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51MZeP8DHCcXqLDAp0Qd7rs4TbPjQuxCE2D6AnswjK4KoexufT14B3BG0xaXJZJywUGgb5qr9LFWNfX6sQxDQZMuV00FaFLtiZr"
    const onToken =(token) => {
        console.log(token);
        alert('Payment Successfule');
    }
    return(
        <StripeCheckout
        label =" Pay Now"
        Name = " Amazing Grace stores"
        billingAddress
        shippingAddress
        image ='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount ={ priceForStripe}
        panelLabe ='Pay Now'
        token = { onToken}
        stripeKey={publishableKey}
        />

    )

}


export default StripeCheckOutButton;