import React from 'react'

const FormRow = ({name,value,type,handleChange,lableText}) => {
  
  return (
        <div className="form-row">
            <label htmlFor={name}>{lableText||name}</label>
            <input type={type} value={value} name={name} onChange={handleChange} className='form-input'/>
        </div>
  )
}

export default FormRow
