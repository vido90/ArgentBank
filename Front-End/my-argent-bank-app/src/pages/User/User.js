import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Transactions from '../../components/Transactions/Transactions';
// import EditUser from '../../components/EditUser/EditUser';

function User() {
    const [token] = useState(localStorage.getItem('token')); // chercher le token dans le redux
    const navigate = useNavigate();

    // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion
    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token, navigate]);

    return (
        <main className='main'>
            {/* <EditUser /> */}
            <Transactions />
        </main>
    )


}

export default User