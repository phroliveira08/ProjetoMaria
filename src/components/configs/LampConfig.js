const LampConfig = (props) => {
    const {deviceName} = props

    const closeWindow = () => {
        const configWindow = document.getElementsByClassName('deviceConfig')[0]
        configWindow.style.display = 'none' 
    }

    const saveConfig = async() => {
        const configAmbiente = document.getElementById('methodWork')
        const configAuto = document.getElementById('Working')
        if(configAuto.value == 'off'){
            const response = await fetch('/turn-off-auto')
        }else{
            if(configAmbiente.value == 'trabalho'){
                const response = await fetch('/turn-on-auto-trabalho')
            }else{
                const response = await fetch('/turn-on-auto-descanso')
            }
        }
    }

    return(
        <div className='deviceConfig'>
            <button className='buttonCloseConfig' onClick={() => {closeWindow()}}>X</button>
            <h1 className='titleDevice'>Configuração - Auto Controle</h1>
            <div className='menuMethod'>
                <p className='textDevice'>Ambiente:  </p>
                <select id='methodWork' className='selectMethod'>
                    <option value='trabalho' >Trabalho</option>
                    <option value='descanso'>Descanso</option>
                </select>
            </div>
            <div className='menuMethod'>
                <p className='textDevice'>Funcionamento:  </p>
                <select id='Working' className='selectMethod'>
                    <option value='on' >On</option>
                    <option value='off'>Off</option>
                </select>
            </div>
            <div className='buttonDiv'>
                <button className='buttonDevice' onClick={saveConfig}>Salvar</button>
            </div>
        </div>
    )
}

export default LampConfig