const LampDevice = (props) => {
    const name = `Lâmpada ${props.id}`
    const {onClickButton} = props
    return (
      <div className='device'>
        <h1 className='titleDevice'>{name}</h1>
        {props.status == 'on' 
         ? <img className='iconDevice' src='/iconLampON.png'></img>
         : <img className='iconDevice' src='/iconLampOff.png'></img>       
        }
        {props.status == 'on' 
         ? <button className='buttonDevice' onClick={() => onClickButton({command: 'off', device: props.id})}>Desligar</button>
         : <button className='buttonDevice' onClick={() => onClickButton({command: 'on', device: props.id})}>Ligar</button>      
        }
        <img className='settingsDevice' src='/settings.svg'></img>
      </div>
    )
}

export default LampDevice
  