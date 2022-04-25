import React from 'react'


export const Hour = ({name}) => {
    return (
        <select name={name} id="" className='form-control select2 custom-select col-4'>
            <option value="AM" selected>AM</option>
            <option value="PM">PM</option>
        </select>
    )
}

const TimeSelect = ({name}) => {
  return (
    <select name={name} className="form-control select2 custom-select col-4">
    <option value="">Time</option>
    
    <option value="01:00 AM">01:00 AM</option>
    <option value="02:00 AM">02:00 AM</option>
    <option value="03:00 AM">03:00 AM</option>
    <option value="04:00 AM">04:00 AM</option>
    <option value="05:00 AM">05:00 AM</option>
    <option value="06:00 AM">06:00 AM</option>
    <option value="07:00 AM">07:00 AM</option>
    <option selected value="08:00 AM">08:00 AM</option>
    <option value="09:00 AM">09:00 AM</option>
    <option value="10:00 AM">10:00 AM</option>
    <option value="11:00 AM">11:00 AM</option>
    <option value="12:00 PM">12:00 AM</option>
    <option value="1:00 PM">01:00 PM</option>
    <option value="2:00 PM">02:00 PM</option>
    <option value="3:00 PM">03:00 PM</option>
    <option value="4:00 PM">04:00 PM</option>
    <option value="5:00 PM">05:00 PM</option>
    <option value="6:00 PM">06:00 PM</option>
    <option value="7:00 PM">07:00 PM</option>
    <option value="8:00 PM">08:00 PM</option>
    <option value="9:00 PM"> 09:00 PM</option>
    <option value="10:00 PM">10:00 PM</option>
    <option value="11:00 PM">11:00 PM</option>
    <option value="12:00 AM">12:00 AM</option>
    {/* <option value="00:00">00:00</option>  */}
</select>
  )
}

export default TimeSelect

