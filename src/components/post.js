import { Link , Form} from "react-router-dom";
import { useState } from "react";

const Discussions = ({ discussions }) => {
  const {userResponse , setUserResponse}= useState("");
  const {responses, setResponses} = useState([]); 

  const handleResponseChange = (e) => {
    setUserResponse(e.target.value);
  }

  const handleSubimt = (e) => {
    e.preventDefault();
    if(userResponse){
      setResponses(userResponse)
    }
  }
  return <>
   <div className="homeContainer">
    <div className="discussionsHome">
    <h2>Abe_123</h2>
    <h3>Topic: {discussions.topic}</h3>
    <Link to={`/discussions/${discussions.id}`}>
    <h1>{discussions.discussion}</h1>
    </Link>
    <p>Comments:</p>
    <ul>
          {responses.map((response, index) => (
            <li key={index}>{response}</li>
          ))}
        </ul>
      </div>
      <div className="comment">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="com"
            name="comment"
            placeholder="Reply"
            value={userResponse}
            onChange={handleResponseChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div className="comment">

    <Form >
      <input type="text" id="com" name="comment" placeholder="Reply"/>
      <br/>
      <button type="submit">Submit</button>
    </Form>
    </div>
  </>

};

export default Discussions