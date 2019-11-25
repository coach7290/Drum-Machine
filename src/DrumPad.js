import React from 'react';


class DrumPad extends React.Component {

    constructor(props) {
        super(props);

        
        
        
      }



    handleKeyDown = (event) => {
      if(event.keyCode===this.props.letter.charCodeAt()) {
        this.audio.play()
      this.audio.currentTime =0;
      this.props.handleDisplay(this.props.id);
      
      }
      
    }

    
    
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime =0;
      this.props.handleDisplay(this.props.id);
      
      this.audio.volume = this.props.volume
     
      
      
      
      }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
      
  }
  
  componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);

  }
    
    
    
  
    render(){
        
      return (
        
        <div onClick={this.handleClick} className="drum-pad" id={this.props.id}>
          
          <h1>{this.props.letter}</h1>
          <audio ref={ref=>this.audio = ref} src={this.props.src} className="clip" id={this.props.letter}>
          </audio>
          <img src={this.props.img}/>
          
          </div>
      )
    }
  }

  export default DrumPad;