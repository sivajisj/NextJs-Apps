import Nav from '@components/Nav';
import '@styles/globals.css';
import React from 'react';


export const metadata = {
    title :"promptopia",
    description : 'Discover & Share AI prompts'
}
const RootLayOut = ({children}) => {
  return (
    <html lang='en'>
        <body>
           <div className="main">
              <div className="gradient" />
           </div>
            
            <main className="app">
              <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayOut