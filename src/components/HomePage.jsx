import React from 'react'
import '../components/css/home.css'
//import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='body'>
        <header className="main-header">
            <nav className='nav nav-items'>
                <ul>
                    <li><a href="h">HOME</a></li>
                    <li><a href="h">ABOUT US</a></li>
                    <li><a href="h">VIEW MAP</a></li>
                    <li><a href="https://ma3sacco.netlify.app/login">LOGIN</a></li>
                    <li><a href="https://ma3sacco.netlify.app/signup">SIGN UP</a></li>
                </ul>
                {/* <ul className="user-authentication">
                    <li><a href="">LOGIN</a></li>
                    <li><a href=""></a>SIGN UP</li>
                </ul> */}
            </nav>
            <h1 className='app-name app-name-large'>MA3 SACCO MODULE</h1>
        </header>
        <section className='content-section container'>
            <h2 className='section-header'>Welcome</h2>
            <img className='about-app-image' src="../components/assets/matatupic.jpg" alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem id praesentium vel, porro vitae exercitationem fugit? Impedit, fugit quae doloremque nisi deserunt illo maxime? Eius dignissimos perspiciatis consectetur quaerat?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque porro natus rem quis hic perspiciatis magni officiis veniam ab nulla sit eos molestias, iure eius adipisci incidunt dolorum repellat!</p>

        </section>
        <section>
            
        </section>

        <footer className='main-footer'>
            <div className='container main-footer-container'>
            <h3 className='app-name'>MA3</h3>
            <ul className='nav footer-nav'>
                <li><a href="h"><img src="" alt="" /></a></li>
                <li><a href="h"><img src="" alt="" /></a></li>
                <li><a href="h"><img src="" alt="" /></a></li>
                <li><a href="h"><img src="" alt="" /></a></li>
                <li><a href="h"><img src="" alt="" /></a></li>
            </ul> 
            </div>
        </footer>
       
    </div>
  )
}

export default HomePage