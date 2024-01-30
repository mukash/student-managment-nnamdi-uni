import React, { useState } from 'react'

const  useRegister = ()  =>{
    const [loading,setLoading] = useState<boolean>(false);
  return {
    loading
  }
}

export default useRegister;