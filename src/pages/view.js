import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

import { find, propEq } from 'ramda'

class ViewPatient extends React.Component {
  constructor () {
    super()
    this.state = {}

  }
  componentDidMount () {
    console.log(this.props.match.params.id)
    const patient = find(propEq('_id',
      this.props.match.params.id),
      this.props.patients
    )
    this.props.dispatch({type: 'SET_PATIENT', payload: patient})

    console.log(patient)

  }
  render() {
    // this.props.patient
    return (
      <Card />
    )
  }
}

const connector = connect(state => state)

export default connector(ViewPatient)
