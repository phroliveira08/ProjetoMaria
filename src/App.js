import React, { Component } from 'react';
import LampDevice from './components/devices/LampDevice'
import './style.css';

class App extends Component {
  state = {
    lampDevices: [
      { id: 1, status: 'on' },
      { id: 2, status: 'off' }
    ]
  }

  turnOn = async (id) => {
    const response = await fetch('/turn-on');
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
    const response = await fetch('/turn-off');
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
    switch(data.command){
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
        <h1 className='title'>PROJETOMARIA</h1>
        <div className='content'>
          <LampDevice id={this.state.lampDevices[0].id} status={this.state.lampDevices[0].status} onClickButton={this.turn} />
          <LampDevice id={this.state.lampDevices[1].id} status={this.state.lampDevices[1].status} onClickButton={this.turn} />
        </div>
      </div>
    );
  }
}
export default App;
