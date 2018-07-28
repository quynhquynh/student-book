import React from 'react'

const SingleStudent = ({skills, firstName, lastName, title, nationality, src, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn}) => (
    <div id='student'>
        <img src={src} alt={firstName} width='300' height='350'/>
        <div id='side-panel'>
            <div>
                <span>Full name: </span>
                <span>{firstName} {lastName}</span>
            </div>
            <div>
                <span>Title: </span>
                <span>{title}</span>
            </div>
            <div>
                <span>Nationality: </span>
                <span>{nationality}</span>
            </div>
            <div>
                <span>Skills: </span>
                <span>{skills}</span>
            </div>
            <div>
                <span>Why Software Developer: </span>
                <span>{whySofterDeveloper}</span>
            </div>
            <div>
                <span>Long-term vision: </span>
                <span>{longTermVision}</span>
            </div>
            <div>
                <span>Motivate Me: </span>
                <span>{motivatesMe}</span>
            </div>
            <div>
                <span>Favorite quote: </span>
                <span>{favoriteQuote}</span>
            </div>
            <div>
                <span>Joined on: </span>
                <span>{joinedOn !== undefined && joinedOn.substr(0, 10)}</span>
            </div>
        </div>
    </div>
)
    
 
export default SingleStudent