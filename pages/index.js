import Head from 'next/head'
import ArticleList from '../components/ArticleList'


//passes in the articles as a prop
export default function Home({ articles }) {

  return (
    <div>
       <Head>
        <title>NextJs-Crash-Course</title>
      </Head>
    <h1>Article List</h1>
      <ArticleList articles={ articles } />

    </div>
  )
}

//fetching data list from external API
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`) //setting limit to 6
  const articles = await res.json()

  //saving the articles as a prop
  return {
    props: {
      articles
    }
  }
}

//Notes: fetches the data from the external API, then returns the data in the form of a prop, 
//which is then passed into the function Home
//the data is then passed into the component ArticleList in the form of a prop
