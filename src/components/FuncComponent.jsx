import React, { useState } from 'react'

const FuncComponent = () => {
    const [estudiante, setEstudiante] = useState({
        name: 'Girlesa',
        country: 'Colombia'
    })
    const changeName = () => {
        if (estudiante.name === 'Girlesa') setEstudiante({...estudiante, name: 'Julieth'})
        else setEstudiante({...estudiante, name: 'Girlesa'})
    }
    return (
        <div>
            <h2>{estudiante.name}</h2>
            <button onClick={changeName}>Change Name Func</button>
        </div>
    )
}

export default FuncComponent
