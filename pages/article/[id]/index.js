
const article = ({article}) => { 

  
   return (
    <>
    <h2>
        {article.title}
    </h2>
    <p>
        {article.body}
    </p>
    </>
   )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
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