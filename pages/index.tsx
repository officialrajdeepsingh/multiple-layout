import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import PostCard from '@/components/Post-card';



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