import React from 'react';

function Header() {
    return (
        <header className="text-gray-600 body-font" >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="cursor-pointer flex cursor title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Frontend Web</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="flex">

                        <li className="mr-5 hover:text-gray-900">
                            <a href='/'>
                                Home
                            </a>
                        </li>

                        <li className="mr-5 hover:text-gray-900">
                            <a href='/about'>
                                About us
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>



    );
}

export default Header;