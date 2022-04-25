import React from 'react'

const DayPicker = ({name}) => {
  return (
    <select name={name} id="" className='form-control select2 custom-select col-4'>
    <option value="Sunday" disabled>SUN</option>
    <option value="Monday" selected>MON</option>
    <option value="Tuesday">TUE</option>
    <option value="Wednesday">WED</option>
    <option value="Thursday">THUR</option>
    <option value="Friday">FRI</option>
    <option value="Saturday" disabled>SAT</option>
   
</select>
  )
}

export default DayPicker