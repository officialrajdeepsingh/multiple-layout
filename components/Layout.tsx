import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;