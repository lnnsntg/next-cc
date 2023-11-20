// import styles from '@/styles/Home.module.css'
// import { Raleway } from 'next/font/google'
// import Image from 'next/image'
// const raleway = Raleway({ subsets: ['latin'] })
import Head from 'next/head'

import ArticlesList from '../components/ArticlesList.js'

export default function Home ({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web, developer, programming'></meta>
      </Head>
      <h3>Welcome to Next</h3>
      <ArticlesList articles={articles} />
    </>
  )
}

export async function getStaticProps () {
  const result = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=4'
  )
  const articles = await result.json()
  return {
    props: { articles }
  }
}
