import React from 'react';
import PropTypes from 'prop-types';



class Slider extends React.Component {
  constructor(props){
    super(props);
    this.captureMove = this.captureMove.bind(this);
    this.moveListener = this.moveListener.bind(this);
    this.removeMove = this.removeMove.bind(this);
    this.state={
      val:10000,
      defaultLeft:0,
      defaultRight:0,
      parent:null,
      handle:'left',
      leftValue:0,
      rightValue : 10000
    }
  }
 
 


 moveListener(e){
   let parentStats = this.state.parent.getClientRects()[0];
   let moveCondition = parentStats.right > e.clientX && parentStats.left < e.clientX;
  
    if(this.state.handle === 'right'){
       if(moveCondition) {
        e.target.style.right =  this.state.defaultRight- e.clientX    + 'px';
    }
    } else {
          if(moveCondition) {
              e.target.style.left =  e.clientX - this.state.defaultLeft  + 'px';
          }
    }
   
 }
 captureMove(e){
    
    if(e.target.getAttribute('type') == 'right') {
    !e.target.style.right ? this.setState({
      defaultRight:e.clientX,
      handle:'right',
      parent:e.target.parentElement}) : null;
    }
    else{
      !e.target.style.left ? this.setState({
        defaultLeft:e.clientX,
        handle:'left',
        parent:e.target.parentElement
      }) : null;
    }
   
   
    e.target.addEventListener('mousemove',this.moveListener,false)
    e.target.addEventListener('mouseout',this.removeMove,false)
    e.target.addEventListener('mouseup',this.removeMove,false)
 }

 removeMove(e){
  
   let parentStats = this.state.parent && this.state.parent.getClientRects()[0];
   let scale = parentStats && parentStats.right -parentStats.left;
   if(this.state.handle === 'right')
   {
     this.setState({ rightValue : 10000-Math.round((10000/scale)*(parseInt(e.target.style.right,10))/1000)*1000});
    } else {
      this.setState({ leftValue : Math.round((10000/scale)*(parseInt(e.target.style.left,10))/1000)*1000});
    }
    this.props.setRange([this.state.rightValue , this.state.leftValue]);
    e.target.removeEventListener('mouseout',this.removeMove,false)
    e.target.removeEventListener('mouseup',this.removeMove,false)
   e.target.removeEventListener('mousemove',this.moveListener,false)
 }

  render() {
  
       return (
        
                <div className = 'control'>
                <span >{this.state.leftValue}</span>
                <span >{this.state.rightValue}</span>
                <div className = 'jsSlider'>
                 <div className = 'handle left' title = {this.state.leftValue} onMouseDown={this.captureMove} >1</div>
                 <div className = 'handle right' title = {this.state.rightValue} type = 'right' onMouseDown={this.captureMove} >2</div>
                </div>
                </div>
            
  
     
       );
  }
}


Slider.defaultProps = {
 setRange: null,
};

Slider.propTypes = {
 setRange : PropTypes.func
}


export default Slider;