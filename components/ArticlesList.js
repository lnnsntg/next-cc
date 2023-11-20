import articleStyles from '../styles/Article.module.css'
import { nanoid } from 'nanoid'
import ArticleItem from './ArticleItem'

const ArticlesList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => (
        <ArticleItem article={article} key={nanoid()}></ArticleItem>
      ))}
    </div>
  )
}

export default ArticlesList
