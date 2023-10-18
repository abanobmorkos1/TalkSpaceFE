import { Link, useLoaderData , Form } from "react-router-dom";


const Show = () => {
  const data = useLoaderData();

  return <>
    <div className="column2">
      <h1>{data.topic}</h1>
      <h2>{data.discussion}</h2>

    </div>
      <div className="sidebar2">
        <div>
      <Form action={`/update/${data.id}`} method="POST">
        <input style={{padding:"15px", margin:"15px" , borderRadius:"15px"}} type="text" name="topic" placeholder="What's today's topic about?"/>
        <input style={{padding:"15px" , margin:"15px",borderRadius:"15px"}}type="text" name="discussion" placeholder="what would you like to discuss?"/>
        <button>Submit</button>
      </Form>
      <Form action={`/delete/${data.id}`} method="post">
      <button style={{padding:"15px" , margin:"15px"}}>Delete discussion</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      </Form>
        </div>
      </div>
    </>
};

export default Show;