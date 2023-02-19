import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import NestedLayout from '../components/Nestedlayout'

const Page = () => {
  return  <article className="format dark:format-invert mt-4 mx-auto">

  <h1>About us</h1>
  <p className="lead">Lorem excepteur dolore ex veniam ad velit officia enim velit consequat consequat nulla eiusmod</p>

  <h2>My story</h2>
  <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
  <ol>
      <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
      <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
      <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
      <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
  </ol>

</article>

}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page