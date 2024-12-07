import React, { useEffect, useState } from 'react'
import claneService from '../../shared/services/clane-store.service'

function Featured() {
  const [value, setValue] = useState();
  claneService.stateSubject.subscribe((value) => {
    console.log('sdsd', value);
    // setValue(value);
  });
  useEffect(() => {
    return () => {console.log('component unmount')}
  }, [value])
  return (
    <div>
      <h1 className='text-center'>Đây là trang featured</h1>
      <div className='container'>
        <p>---coming soon---</p>
        {value}
      </div>
    </div>
  )
}

export default Featured