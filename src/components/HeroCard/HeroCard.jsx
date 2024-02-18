import React from 'react'

const HeroCard = ({ title, description, imageUrl, altText }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <img src={imageUrl} alt={altText} />
        </div>
    )
}

export default HeroCard