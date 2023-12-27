import React from 'react';
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';
import '../Home/home.scss';

function Home () {
    return (
        <main className='home'>
            <Hero />

            <section className='features'>
                <Feature
                    image={iconChat}
                    alt="Chat Icon"
                    title='You are our #1 priority'
                    text='Need to talk to a representative? You can get in touch through our 
                    24/7 chat or through a phone call in less than 5 minutes.'
                />
                
                <Feature
                    image={iconMoney}
                    alt="Chat Icon"
                    title='More savings means higher rates'
                    text='The more you save with us, the higher your interest rate will be!'
                />

                <Feature
                    image={iconSecurity}
                    alt="Chat Icon"
                    title='Security you can trust'
                    text='We use top of the line encryption to make sure your data and money is 
                    always safe.'
                />


            </section>

        </main>
    )
}

export default Home