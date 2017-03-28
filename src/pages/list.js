import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import ListItem from '../components/list-item'

import { map } from 'ramda'

const patientToListItemObj = map(patient => ({
    _id: patient._id,
    title: patient.name.first + ' ' + patient.name.last,
    image: patient.avatar,
    sub: moment(patient.birthDate).fromNow(true) + ' old',
    linkUrl: '/patients/' + patient._id,
    linkDescription: 'View Patient'
  })
)
const li = li => <ListItem key={li._id} {...li} />

const List = function (props) {
  return (
    <ul className="list">
      {map(li, patientToListItemObj(props.patients))}
    </ul>
  )
}

const connector = connect(state => state)

export default connector(List)
