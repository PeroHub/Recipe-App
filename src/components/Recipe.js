import React from 'react'
import potatoe from '../potatoe.jpg'

function Recipe() {
    return (
        <div className="recipe-list">
            <h3>Home of recipe</h3>

            <div className="recipe-image">
                <img src={potatoe} />
            </div>
        </div>
    )
}

export default Recipe