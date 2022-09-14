import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article) => (
            <ArticleItem article={article} />
        ))}
    </div>
  )
}

export default ArticleList

//Notes
//Taking in the articles in form of prop which was passed to this component in index.js
//the function loops over the data with .map and accesses the title property