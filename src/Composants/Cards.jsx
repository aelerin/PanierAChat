import React from 'react';
import data from "../bdd/bdd.json"
import { Card, Image } from "react-bootstrap"
import { Component, Fragment } from 'react/cjs/react.production.min';
import { render } from '@testing-library/react';

const Cards = () => {

    const checkImage = (url) => {
        if (typeof url !== 'undefined') {
            return url
        }
        else
            console.log("Url non valide");
    }

    const checkUrl = (url) => {
        if (typeof url !== 'undefined') {
            return url.url
        }
        else
            console.log("Url non valide");
    }

    const mapCat = data.map((data, i) => {

        return (

            <div key={i} className='CardGroup'>
                <div key={i} className='CatCard'>
                    <div className='CardImageContainer'>

                    <img src={checkImage(checkUrl(data.image))} className='CatImage' alt="pas d'image" />
                    </div>
                    <div className='CardInfoContainer'>

                    <p className='TextCardContainer'>Race: {data.name}</p>

                    </div>
                    <div className='ButtonCardContainer'>
                        <button className='ButtonCard Green'>+</button>
                        <button className='ButtonCard Red'>+</button>
                    </div>
                </div>
            </div>
        )

    })


    return (
        <Fragment >
            <div className='CatContainer'>

                {mapCat}
            </div>
        </Fragment>
    )

}




export default Cards;