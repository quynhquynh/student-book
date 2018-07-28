import React from 'react'

const Chunk = (props) => {
    const {part, value, onChange, type = ''} = props
    let label = part.replace(/([A-Z])/g, ' $1')
    label = part.replace(part[0], part[0].toUpperCase()).concat(': ')
    return (
        <div>
            <span>{label}</span>
            <input type={type ? type : 'text'} name={part} value={value} onChange={e => onChange(e)} />
        </div>
    )
}

export default Chunk