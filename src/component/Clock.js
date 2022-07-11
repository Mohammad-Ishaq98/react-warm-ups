import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date : new Date(),
      locale : 'bn-BD',
    }
    this.handleClicked = this.handleClicked.bind(this)
  }
  // compoentDidMount print the js logic action after the whole page load jsut like jQuery's windows.document
  componentDidMount(){
    this.clockTimer = setInterval(() => this.tick() ,1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }
 
  handleClicked(){
    this.setState({
      locale : 'en-US'
    })
  }

  tick(){
    this.setState({
      // this.date : new Date() may result in fatal !!
      date : new Date()
    })
  }
  render(){
    // destructure
    const {locale} = this.state;
    return (
      <div className="">
        <h1 className='heading'>
          <span className="text">
            {/* {this.state.date.toLocaleTimeString(this.props.locale)} */}
            {this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <button onClick={this.handleClicked}>Click here</button>
      </div>
    );
  }
};


export default Clock;