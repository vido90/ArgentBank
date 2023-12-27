import { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Usedispatch récupère la fonction dispatch du store Redux et useSelector récupère le token du state Redux
import { useNavigate } from 'react-router-dom'; // gestion de la navigation

import "../SignIn/signin.scss";

function SignIn() {
    // Récupération de la fonction dispatch du store 
    const dispatch = useDispatch();

    // Récupération du token depuis le state global avec useSelector
    const token = useSelector((state) => state.auth.token);

    // Déclaration des etats locaux avec useState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Initialisation du hook useNavigate pour la navigation 
    const navigate = useNavigate();

    // Fonction de gestion des changements de valeur des champs de formulaire 
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Fonction de gestion de la soumission du formulaire 
    const handleSignIn = (event) => {
        // Empêche le rechargement de la page lors de la soumission du formulaire
        event.preventDefault();

        // Crée un objet userData avec les données de connexion
        const userData = {
            email:username,
            password:password
        };

        // Envoie une requête POST au serveur avec les données 
        fetch('http://localhost:3001/api/v1/user/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body:JSON.stringify(userData)
    })
        .then(response => response.json()) // Transforme la réponse en JSON
        .then(data => {
            console.log(data);
                // vérifie si la réponse contient une erreur 
                if (data.status !== 200) {
                    setError(true); // Met à jour l'état error
                    return;
                } else {
                    // Enregistre le token dans le store Reduc
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            token: data.body.token
                        }
                    });

                    // redirige vers la page "/user"
                    navigate("/user");
                }
        })
        .catch(error => {
            console.error(error);
        });
    };

    // Vérifie si l'utilisateur est déjà connecté, le redirige vers "/user"
    useEffect(() => {
        if (token) {
            navigate('/user');
        }
    }, [token, navigate]);

    // Rendu de la composante 
    return (
        <main>
            <section className='sign-in'>
                {/* icône utilisateur */}
                <i className='fa fa-user-circle sign-in-icon'></i>

                {/* Formulaire de connexion */}
                <form onSubmit={handleSignIn}>
                    {/* Champ email */}
                    <div className="input-wrapper">
                        <label htmlFor="username">Email</label>
                        <input className={error ? 'sign-in__error-border' : ''} type="email" id="username" value={username} onChange={handleUsernameChange} required/>
                    </div>

                    {/* Champ mot de passe */}
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                        className={error ? 'sign-in__error-border' : ''} 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required
                        />
                    </div>

                    {/* Affichage du message d'erreur */}
                    {error && <p className="sign-in__error-message">The username or password incorrect</p>}

                    {/* Option "Remember me" */}
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    {/* Bouton de soumission */}
                    <button className="sign-in__button" type="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
};


export default SignIn