import React, { useContext } from 'react'
import { globalRefsContext } from '../context/GlobalRefs'
import Footer from './Footer'
import Header from './Header'
import ScrollWrapper from './ScrollWrapper'

export default function Layout({children}:{children:React.ReactNode}) {

    const Globalrefs = useContext(globalRefsContext);

    if(!Globalrefs) return null;
    const {contentRef} = Globalrefs;

    return (
    <div>
        <Header/>
        <ScrollWrapper>
            <div 
                className='relative z-[3] h-[200vh] bg-[darkgray]' 
                ref={contentRef  as React.MutableRefObject<HTMLDivElement>}
            >
                {children}
            </div>
        <Footer/>
        </ScrollWrapper>
    </div>
  )
}