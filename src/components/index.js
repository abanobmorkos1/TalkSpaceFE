import Discussions from './post';
import { useLoaderData } from 'react-router-dom';
import { Link} from "react-router-dom";

const Index = (props) => {
    const data = useLoaderData()
    return<>
    <div className='sidebar'>
    <Link to='/createadiscussion'>
    <button>create</button>
    </Link>
      </div>
      <div className='column2'>
    {data.map((discussions) => <Discussions discussions={discussions} key={discussions.id} />)}
      </div>
    </> 
  };
  
  export default Index;