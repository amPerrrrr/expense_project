import React from 'react'
import Header from './Header'
import LeftBarMenu from './LeftBarMenu'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <LeftBarMenu />
      {children}
    </div>
  )
}
