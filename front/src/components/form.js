import React from 'react'

const Form = props => {
    const { onSubmit, onInput, ...rest } = props
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='firstName'>First name: </label>
                <input type='text' name='firstName' value={rest.firstName} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='lastName'>Last name: </label>
                <input type='text' name='lastName' value={rest.lastName} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' value={rest.title} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='nationality'>Nationality: </label>
                <input type='text' name='nationality' value={rest.nationality} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='skills'>Skills: </label>
                <input type='text' name='skills' value={rest.skills} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='whySofterDeveloper'>Why Software Developer: </label>
                <input type='text' name='whySofterDeveloper' value={rest.whySofterDeveloper} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='longTermVision'>Long-term vision: </label>
                <input type='text' name='longTermVision' value={rest.longTermVision} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='motivatesMe'>Motivates me </label>
                <input type='text' name='motivatesMe' value={rest.motivatesMe} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='favoriteQuote'>Favorite Quote: </label>
                <input type='text' name='favoriteQuote' value={rest.favoriteQuote} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='joinedOn'>Joined on: </label>
                <input type='text' name='joinedOn' value={rest.joinedOn} onChange={onInput} />
            </div>
            <div>
                <label htmlFor='src'>Upload profile picture: </label>
                <input type='file' name='src'  />
            </div>
            <input type='submit' value='submit' />
        </form>    
    )
}


export default Form