import Link from "next/link"
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ( {article} ) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
        <a className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
        </a>
    </Link>
  )
}

export default ArticleItem

//Notes:
//pass in singular article as a prop to the component 
//create a Link to each article and access the id 
//accessed title and body properies of data using dot notation 