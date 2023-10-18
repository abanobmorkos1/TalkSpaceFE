import { Form  } from "react-router-dom";


const Formc = () => {
  
 return <div id="form-ui">
    <Form action="/create" method="post" id="form">
      <div id="form-body"/>
        <div id="welcome-lines">
          <div id="welcome-line-1">what would you like to discuss?</div>
          <div id="welcome-line-2">Enter subject and topic below </div>
        </div>
        <div id="input-area">
          <div className="form-inp">
            <input type="text" name="topic" placeholder="write subject here"/>
          </div>
          <div className="form-inp">
            <input type="text" name="discussion" placeholder="write details here"/>
          </div>
        </div>
        <div id="submit-button-cvr">
          <button>Submit discussion</button>
        </div>
    </Form>

    </div>
  };
  export default Formc;