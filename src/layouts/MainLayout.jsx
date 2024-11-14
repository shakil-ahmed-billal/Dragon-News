import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div>
        <header>
            <section>
                <Header></Header>
            </section>
            <section>
                <Navbar></Navbar>
            </section>
        </header>
        <main>
            <section>
                
            </section>
        </main>
    </div>
  )
}

export default MainLayout