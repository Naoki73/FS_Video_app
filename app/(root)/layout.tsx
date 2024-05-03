import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>
        {/* Navbar */}
        {children}
        Footer
      </main>
    </div>
  )
}

export default RootLayout