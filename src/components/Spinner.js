import React from 'react'
import loading from './gear_loader.gif';
const Spinner = () => {

  return (
    <div className='text-center '>
      <img className='my-2 mb-5' src={loading} alt="loading" />
    </div>
  )
}
export default Spinner;
