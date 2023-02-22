import type { ReactElement } from 'react'
import PostCard from '@/components/Post-card';
//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return <>
    <PostCard />
    <PostCard />
    <PostCard />
  </>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
       {page}
    </Layout>
  )
}


export default Page