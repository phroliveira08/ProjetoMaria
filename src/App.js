import React, { Component } from 'react';
import LampConfig from './components/configs/LampConfig';
import LampDevice from './components/devices/LampDevice'
import './style.css';

class App extends Component {
  state = {
    lampDevices: [
      { id: 1, status: 'off' },
      { id: 2, status: 'off' }
    ],
    config: {
      open: true,
    }
  }

  openWindow = () => {
    const configWindow = document.getElementsByClassName('deviceConfig')[0]
    configWindow.style.display = 'flex'
  }

  turnOn = async (id) => {
    const response = await fetch(`/turn-on${id}`);
    const data = await response.json();
    this.setState(state => {
      const lampDevices = state.lampDevices.map(item => {
        if (item.id == id) {
          item.status = data.body
        }
      })
      return lampDevices
    })
    return data;
  }

  turnOff = async (id) => {
    const response = await fetch(`/turn-off${id}`);
    const data = await response.json();
    this.setState(state => {
      const lampDevices = state.lampDevices.map(item => {
        if (item.id == id) {
          item.status = data.body
        }
      })
      return lampDevices
    })

    return data;
  }

  turn = async (data) => {
    switch (data.command) {
      case 'on':
        console.log(data.command + 'ligando')
        this.turnOn(data.device)
        break;
      case 'off':
        this.turnOff(data.device)
        break;
      default:
        console.log('Não existe essa opção')
        break;
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='header'>
          <h1 className='title'>PROJETOMARIA</h1>
          <button className='buttonSettingDevice' onClick={() => { this.openWindow() }}>
            <img src='/settings.svg' />
          </button>
        </div>
        <div className='content'>
          <LampDevice id={this.state.lampDevices[0].id} status={this.state.lampDevices[0].status} onClickButton={this.turn} />
          <LampDevice id={this.state.lampDevices[1].id} status={this.state.lampDevices[1].status} onClickButton={this.turn} />
          {this.state.config.open &&
            <LampConfig />
          }
        </div>
      </div>
    );
  }
}
export default App;
