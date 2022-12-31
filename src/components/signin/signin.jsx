import React from 'react';
import ReactDOM from 'react-dom';

import './signin.css';

import FormInput from '../form/form';

import Button from '../button/button';

import signInWithGoogle from '../collectionitems/firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
}
    handleSubmit = (event) => {
        event.PreventDefaul();

        this.setState({ email: '', password: '' });


    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };


    render() {
        return (
           <div className='signin'>
                <h1> I already have an account  </h1>
                <span> Sign in with email and password </span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />


                
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />

                    <div className='clicks'>
                        <Button type='submit' Children='Sign in'></Button>
                        <Button className='google' onClick={signInWithGoogle} Children=' Sign In With Google'>{''}{''}</Button>
                    </div>
                    

                </form>
                

           </div> 


        )
    }
    
}


export default SignIn;
