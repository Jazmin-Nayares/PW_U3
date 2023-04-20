import React from 'react'
import { Outlet } from 'react-router-dom'
import Navegation from './Navegation'

export default function Layout() {
  return (
        <>
        <Navegation/>
        <Outlet/>
        </>
    
  )
}
