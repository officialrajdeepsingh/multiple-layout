import React from 'react';

function PostCard() {
    return (
        <div className="container px-6 py-10 mx-auto">

            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">

                <img className="object-cover border-none w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://picsum.photos/200" alt=" post.data.title " />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                        <h2 className="text-sm text-blue-500 uppercase" >
                            React
                        </h2>

                        <a href='/read' className="block mt-4 text-2xl font-semibold text-gray-800 hover:text-gray-500 dark:text-white md:text-3xl"> Understand The Android Features Before You Regret. </a>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem excepteur dolore ex veniam ad velit officia enim velit consequat consequat nulla eiusmod
                        </p>

                        <a href='/read' className="inline-block mt-2 text-blue-500  hover:text-blue-300">Read more</a>

                        <div className="flex items-center mt-6">

                            <img className="border-none object-cover object-center w-10 h-10 rounded-full" src="https://picsum.photos/200" alt="Bobby Ramos" />

                                <div className="mx-4">
                                    <a href="/author" className="text-sm text-gray-700 dark:text-gray-200"> Bobby Ramos </a>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Technical writer
                                    </p>
                                </div>
                        </div>
                    </div>
            </div>
        </div>

    );
}

export default PostCard