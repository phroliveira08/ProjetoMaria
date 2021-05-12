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
         ? <div className='buttonDiv'><button className='buttonDevice' onClick={() => onClickButton({command: 'off', device: props.id})}>Desligar</button></div>
         : <div className='buttonDiv'><button className='buttonDevice' onClick={() => onClickButton({command: 'on', device: props.id})}>Ligar</button></div>      
        }
        <div className='buttonDiv'><button className='buttonSettingDevice'><img src='/settings.svg'/></button></div>
      </div>
    )
}

export default LampDevice
  