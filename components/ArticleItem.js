import Link from 'next/link'
import articleStyle from '../styles/Article.module.css'

export default function ArticleItem ({ article }) {
  return (
    <Link
      href='/article/[id]'
      as={`/article/${article.id}`}
      className={articleStyle.card}
    >
      <h3>{article.title} &rarr; </h3>
      <p>{article.body}</p>
    </Link>
  )
}
