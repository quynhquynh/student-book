import React from 'react'

const Edit = ({handleSubmit, handleEdit, handleChange, _id, skills, firstName, lastName, title, nationality, src, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn}) => (
    <form id='student' onSubmit={handleSubmit}>
        <img src={src} alt={firstName} width='300' height='350'/>
        
        <div id='side-panel' className='edit-panel'>
            <div>
                <span>First name: </span>
                <input type='text' name='firstName' value={firstName} onChange={handleChange} />
            </div>
            <div>
                <span>Last name: </span>
                <input type='text' name='lastName' value={lastName} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Title: </span>
                <input type='text' name='title' value={title} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Nationality: </span>
                <input type='text' name='nationality' value={nationality} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Skills: </span>
                <input type='text' name='skills' value={skills} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Why Software Developer: </span>
                <input type='text' name='whySofterDeveloper' value={whySofterDeveloper} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Long-term vision: </span>
                <input type='text' name='longTermVision' value={longTermVision} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Motivates Me: </span>
                <input type='text' name='motivatesMe' value={motivatesMe} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Favorite quote: </span>
                <input type='text' name='favoriteQuote' value={favoriteQuote} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Joined on: </span>
                <input type='text' name='joinedOn' value={joinedOn} onChange={e => handleChange(e)} />
            </div>
            <div>
                <span>Choose another image</span>
                <input type='file' name='src' />
            </div>
        </div>
        <div id='btn'>
            <button type='submit'>Save</button>
            <button onClick={handleEdit}>Cancel</button>
        </div>
    </form>
    
)

export default Edit