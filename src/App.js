import React from 'react'
import './index.css'
import Navigation from './components/Navigation'
import Imagecontainer from './components/Imagecontainer'
import Recipe from './components/Recipe'

function App() {
    return (
        <div className="main">
            <div className="header-con">
                <header>
                    <Navigation />
                    
                </header>
            </div>
            <div>
                <main>
                <Imagecontainer />
                <Recipe />
                </main>
            </div>
            <div>
                <footer>
                
                </footer>
            </div>
        </div>
    )
}

export default App