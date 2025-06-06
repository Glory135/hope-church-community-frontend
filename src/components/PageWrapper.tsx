import React from 'react'

function PageWrapper({children}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-full min-h-screen h-auto flex flex-col justify-center '>{children}</div>
  )
}

export default PageWrapper