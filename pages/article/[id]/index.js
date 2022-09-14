
import Link from "next/link"


const article = ({article}) => { 
   return (
    <>
    <h2>
        {article.title}
    </h2>
    <p>
        {article.body}
    </p>
 
    <Link href='/'>
        <a className="backbtn">
            Go Back
        </a>
    </Link>
 
    <style jsx> {`
    .backbtn:hover,
    .backbtn:focus,
    .backbtn:active {
        color: #0070f3;
        border-color: #0070f3;
    }`}

    </style>
    </>
   )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`) 

    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))
 
    return {
        paths,
        fallback: false
    }
}

export default article

//Notes:
//This page accesses the page to specific article based on its id

//method 1
//can use react router dom to access id by importing useRouter
// then set useRouter() to a var and set router.query as a car with the id passed in and return id
//const router = useRouter()
//const { id } = router.query
//  return <div> This is article # {id}</div>

//method 2 
//use getServerSideProps
//export const getServerSideProps = async (context) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    // const article = await res.json()

    // return {
    //     props: {
    //         article
    //     }
    // }

//method 3 generates the paths
//use getStaticProps
//getStaticPaths must be exported with this