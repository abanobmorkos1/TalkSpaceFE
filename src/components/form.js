import { Form  } from "react-router-dom";

const Formc = () => {
    return <div className="create_form">
        <div className="form_create">            
    <Form action="/create" method="Post">
      <input type="text" name="topic" placeholder="write subject here"/>
      <br/>
      <input type="text" name="discussion" placeholder="write details here"/>
      <br/>
      <button>Submit discussion</button>
  </Form>
        </div>
      </div>
    
  
  };

  export default Formc;