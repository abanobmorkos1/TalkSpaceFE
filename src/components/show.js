import { Link, useLoaderData , Form } from "react-router-dom";

const Show = () => {
  const data = useLoaderData();

  return (
    <div >
      <h3>{data.topic}</h3>
      <h1>{data.discussion}</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <Form action={`/delete/${data.id}`} method="post">
      <button>Delete discussion</button>
      </Form>
      <Form action={`/update/${data.id}`} method="POST">
        <input type="text" name="topic" placeholder="What's today's topic about?"/>
        <br/>
        <input type="text" name="discussion" placeholder="what would you like to discuss?"/>
        <br/>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default Show;