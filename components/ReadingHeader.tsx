import React from 'react';

function ReadingHeader() {
    return (
        <header className="text-gray-600 body-font py-4 w-full top-0  bg-gray-500" >
            <div className="container content-center mx-auto flex py-3 px-2 flex-row ">
                <a href="/" className="cursor-pointer cursor title-font font-medium text-gray-200 mb-4 md:mb-0">
                    <span className="text-xl">
                        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 25"><path fill="#232326"
                                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                                data-name="Left" /></svg>
                    </span>
                </a>

                <span className="cursor-pointer cursor title-font font-medium text-gray-200 mb-4 md:mb-0 ml-3 text-xl">Understand The Android Features Before You Regret</span>

            </div>
        </header>



    );
}

export default ReadingHeader;