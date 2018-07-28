import React from 'react'
import Chunk from './chunk'

const Edit = ({handleSubmit, handleEdit, handleChange, _id, skills, firstName, lastName, title, nationality, src, whySofterDeveloper, longTermVision, motivatesMe, favoriteQuote, joinedOn}) => {
    const arr = [
        {part: 'firstName', value: firstName},
        {part: 'lastName', value: lastName},
        {part: 'title', value: title},
        {part: 'nationality', value: nationality},
        {part: 'skills', value: skills},
        {part: 'whySofterDeveloper', value: whySofterDeveloper},
        {part: 'longTermVision', value: longTermVision},
        {part: 'motivatesMe', value: motivatesMe},
        {part: 'favoriteQuote', value: favoriteQuote},
        {part: 'joinedOn', value: joinedOn, type: 'date'}
    ]
    return (
        <form id='student' onSubmit={handleSubmit}>
            <img src={src} alt={firstName} width='300' height='350'/>
            
            <div id='side-panel' className='edit-panel'>
                {arr.map(a => <Chunk key={a.part} {...a} onChange={handleChange} />)}
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
    
}
export default Edit