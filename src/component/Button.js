import React from 'react';

class Button extends React.Component {
  shouldComponentUpdate (nextProps) {
    const {change : currentChange, locale : currentLocale } = this.props;
    const {change : nextChange, locale : nextLocale } = nextProps;
    if(currentChange === nextChange && nextLocale === currentLocale){
      return false
    }
     return true
  }
  render() {
    console.log('button component renderd');
    const {change, locale} = this.props
    return (
      <div>
        <button onClick={() => change(locale)} >  {/*we can pass parameter via {() => this.handleClicked('en-US')} */}
          Click here
        </button>
      </div>
    );
  }
}

export default Button;