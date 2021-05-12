const LampConfig = (props) => {
    const {deviceName} = props
    return(
        <div className='deviceConfig'>
            <button className='buttonCloseConfig'>X</button>
            <h1 className='titleDevice'>Configuração - {deviceName}</h1>
            <div className='menuMethod'>
                <p className='textDevice'>Ambiente:  </p>
                <select id='methodWork' name='methodWork' className='selectMethod'>
                    <option value='trabalho' >Trabalho</option>
                    <option value='descanso'>Descanso</option>
                </select>
            </div>
            <div className='buttonDiv'>
                <button className='buttonDevice'>Salvar</button>
            </div>
        </div>
    )
}

export default LampConfig