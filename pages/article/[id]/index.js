import Link from 'next/link'
// import { useRouter } from 'next/router'

export default function article ({ article }) {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <br />
      <Link href={'/'}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async function (context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const article = await response.json()
  return {
    props: { article }
  }
}

export async function getStaticPaths () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await response.json()

  const ids = articles.map(article => article.id)

  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  console.log(paths)

  return {
    paths,
    fallback: false
  }
}
