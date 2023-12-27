import React from 'react';
import './signin.scss'

function SignIn() {
    return (
    
        <main className='main bg-dark'>

            <section className='sign-in-content'>
                <i className='fa fa-user-circle sign-in-icon'></i>
                <h1>Sign In</h1>
                <form>
                    <div className='input-wrapper'>
                        <label for='username'>Username</label>
                        <input type='text' id='username'></input>
                    </div>

                    <div className='input-wrapper'>
                        <label for='password'>Password</label>
                        <input type='password' id='password'></input>
                    </div>

                    <div className='input-remember'>
                        <input type='checkbox' id='remember-me'></input>
                        <label for='remember-me'>Remember me</label>
                    </div>

                    {/* Bouton de soumission */}
                    <button className="sign-in-button" type="submit">Sign In</button>

                </form>
            </section>
        </main>
    )
}

export default SignIn