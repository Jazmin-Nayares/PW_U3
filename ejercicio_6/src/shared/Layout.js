import React from 'react'
import Navegation from './Navegation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div classname="d-flex flex-column">
    <main classname="flex-shrink-0">
        <Navegation/>
        <section classname="py-5 bg-light">
                <div classname="container px-5">
                    <div classname="row gx-5">
                        <div classname="col-xl-8">
                            <h2 classname="fw-bolder fs-5 mb-4">Blogs</h2>
                            <Outlet/>
                        </div>
                    </div>
                </div>
        </section>
    </main>
    <Footer/>
    </div>
  )
}
