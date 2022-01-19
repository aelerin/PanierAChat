import React, { useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Component, Fragment } from 'react/cjs/react.production.min';
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useRef, useEffect } from 'react';

const NavigationBar = () => {

    const [showModal1, setShowModal1] = React.useState(false)
    const [showModal2, setShowModal2] = React.useState(false)
    const [modalName1, setmodalName1] = React.useState("")
    const [modalName2, setmodalName2] = React.useState("")

    const ref = useRef();
    const ref2 = useRef();

    useOnClickOutside(ref, () => setShowModal1(false));
    useOnClickOutside(ref2, () => setShowModal2(false));


    return (
        <Fragment>

            <Navbar className='NavContainer'>

                <div className='NavContainerLeft'>
                    <Link to="/" className='NavLinkHome'>
                        <img className="LogoCat" src={require("../Assets/Img/catlogo.png")} alt="cat" />

                    </Link>
                    <Link to="/Admin">
                        <button type="button" className="btn btn-primary">Admin</button>
                    </Link>
                </div>
                <div className='NavContainerRight'>


                    <Modal show={showModal1} handleClose={() => setShowModal1(false)} modalname={modalName1}>

                        <div ref={ref}>

                            <p className='modalTitle'>Connexion</p>
                            <form className="formModal .form-group" action="" method="post">
                                <input className='modalInput' type="text" required placeholder='Pseudo' />
                                <input className='modalInput' required placeholder='Mot de passe' />
                            </form>

                        </div>

                    </Modal>
                    <button type="button" className="NavLinkPanier btn btn-primary" onClick={() => { setShowModal1(true); setmodalName1("Se connecter") }}>
                        Connexion
                    </button>


                    <Modal show={showModal2} handleClose={() => setShowModal2(false)} modalname={modalName2}>
                        <div ref={ref2}>
                            <p className='modalTitle'>Inscription</p>
                            <form className="formModal .form-group" action="" method="post">
                                <input className='modalInput' type="text" required placeholder='Nom' />
                                <input className='modalInput' type="text" required placeholder='Prenom' />
                                <input className='modalInput' type="text" required placeholder='Pseudo' />
                                <input className='modalInput' type="mail" required placeholder='E-mail' />


                                <input className='modalInput' type="password" required placeholder='Mot de passe' />
                                <input className='modalInput' type="password" required placeholder='Confirmer mot de passe' />
                            </form>
                        </div>
                    </Modal>
                    <button type="button" className="NavLinkPanier btn btn-primary" onClick={() => { setShowModal2(true); setmodalName2("S'inscrire") }}>
                        Inscription
                    </button>

                    <Link to="/Panier" className='NavLinkPanier btn btn-primary'>Mon panier</Link>

                </div>

            </Navbar>

        </Fragment >
    )

};
function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because the passed-in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

export default NavigationBar;