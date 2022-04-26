import React from "react"
import  InputMask  from 'react-input-mask'

export class FormInput extends React.Component {
 
  render() {
    return <InputMask {...this.props} mask="000.000,00"  />;
  }


}