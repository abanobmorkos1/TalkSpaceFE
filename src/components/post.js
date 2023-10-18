import { Link } from "react-router-dom";
import { useState } from "react";


const Discussions = ({ discussions }) => {
    const [likes,SetLikes] = useState(0)

  return <>
    <div className="discussionsHome" style={{marginTop:"15px"}}>
      <h2>Topic: {discussions.topic}</h2>
        <Link to={`/discussions/${discussions.id}`}>
        <h1>{discussions.discussion}</h1>
        </Link>
    </div>
        <div className="heartcontainer" >
        <button onClick={() => SetLikes(likes + 1)}>
         {likes} Likes
        </button>
        </div>
  </>
};

export default Discussions