import React from 'react'

type SelectProp = {
  name: string,
  title: string,
  value: string,
  setValue: any
}

const DayPicker: React.FC<SelectProp> = ({ name, title, value, setValue }) => {
  return (
    <select name={name} id="" className='form-control select2 custom-select col-8' value={value} onChange={(e: any) => setValue(e.target.value)}>
      <option value="">{title}</option>
      <option value="Sunday" disabled>SUN</option>
      <option value="Monday" >MON</option>
      <option value="Tuesday">TUE</option>
      <option value="Wednesday">WED</option>
      <option value="Thursday">THUR</option>
      <option value="Friday">FRI</option>
      <option value="Saturday" disabled>SAT</option>

    </select>
  )
}

export default DayPicker