import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrumPad from "./DrumPad";
import VolumeBar from "./VolumeBar";
import snare from "./images/snare.png";
import bass from "./images/bass-guitar.png";
import bongos from "./images/bongos.png";
import tomtom from "./images/snare-drum.png";
import bass3 from "./images/bass3.png";
import shotgun from "./images/piano.png";
import hihat from "./images/hi-hat.png";
import drumhit from "./images/drum-set.png";
import lasertag from "./images/laser-tag.png";
import volume from "./images/speaker.png";

const data = [
  {id:"Snare", letter: "Q", src: 'http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/17-side%20stick%20snare.wav', img: snare},
   {id:"Bass 1", letter: "W", src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%2011-909-Free-Loops.com.mp3', img: bass},
   {id:"Bongo", letter: "E", src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bongo%20Loop%2015-9342-Free-Loops.com.mp3', img: bongos},
   {id:"Tom Tom", letter: "A", src: 'http://www.electrongate.com/dmxfiles/drumtraks/SCI_TOM.wav', img: tomtom},
   {id:"Bass 2", letter: "S", src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Moog%20Bass%20Hit%208-2784-Free-Loops.com.mp3', img: bass3},
   {id:"Piano", letter: "D", src: 'http://www.vibrationdata.com/piano_C_sharp.mp3',img: shotgun},
   {id:"High Hat", letter: "Z", src: 'http://www.denhaku.com/r_box/sr16/sr16hat/open%20hat.wav', img: hihat},
   {id:"Drum Hit", letter: "X", src: 'http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20WAV%20samples/Low%20Tom.wav', img: drumhit},
   {id:"Laser", letter: "C", src: 'http://s1download-universal-soundbank.com/wav/3534.wav', img: lasertag}

]


class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      display: "",
      sliderValue: 0,
      volume: 0
      
    }


   
    
  } 

  handleDisplay = display => this.setState({display})


  handleSlider = (e) =>{
    const volume = e.target.value / 100;
    this.setState({
      volume : volume,
      sliderValue : e.target.value
      
      
    })
    console.log(this.state.sliderValue);
  }
    

  
    render(){

      
      return (
        <div id="drum-machine">
           <h1>{this.state.display} </h1>
          <div className ="drum-pads">
            
            
              
            {data.map(d => (
              <DrumPad handleDisplay={this.handleDisplay} id={d.id} letter={d.letter} src={d.src} img={d.img} volume={this.state.volume} />
            ))}
            
          </div>
          

          
          
          <div className="volumeBar">
          <img className="speaker" src={volume}/>
          <input type="range" name="VOLUME" min="0" max="100" value={this.state.sliderValue} onChange={this.handleSlider}></input>
          </div>
          
          </div>
         
      )
    }
  }

export default App;
