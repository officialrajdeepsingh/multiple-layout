import React from 'react';
import type { ReactElement } from 'react'
import ReadingLayout from '@/components/ReadingLayout';

function read() {
    return (

            <article className="format dark:format-invert mt-16 mx-auto">

                <h1>Understand The Android Features Before You Regret.</h1>
                <p className="lead">Lorem excepteur dolore ex veniam ad velit officia enim velit consequat consequat nulla eiusmod</p>
                <time className="mt-2" >
                    November 8th, 2022
                </time>



                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, omnis accusantium! Hic ipsa repudiandae, quibusdam autem dolor earum labore vero voluptatem! Quaerat aliquam pariatur ex cumque sint quas ad rerum.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quae culpa corporis quia ipsa saepe magni recusandae nihil impedit assumenda? Porro veniam consequatur adipisci, iure delectus cupiditate illo voluptate magni error aliquid vitae repudiandae, eligendi itaque, id explicabo corporis! Iusto vel minima, quam adipisci corporis incidunt. Saepe animi eaque natus vel provident velit autem officiis tenetur, eos fugit neque quia at ut odit iusto ea explicabo, totam blanditiis. Cum suscipit corporis in quae vel possimus eaque dolorum necessitatibus amet alias corrupti id, perspiciatis laudantium, numquam, iure fugiat. Laudantium rem id ipsam? Ipsa earum mollitia enim corporis pariatur repellendus magni numquam.
                </p>

                <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
                <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>

                <h2>When does design come in handy?</h2>
                <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
                <ol>
                    <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
                    <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
                    <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
                    <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
                </ol>

            </article>

    );
}

export default read;

read.getLayout = function getLayout(page: ReactElement) {
    return (
        <ReadingLayout>
            {page}
        </ReadingLayout>
    )
}