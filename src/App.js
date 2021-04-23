import './App.css';
import axios from 'axios';

function App() {

  const addEvent = (e) => {
    axios.post('https://clone-project-back-end-jiayuzheng01421007.codeanyapp.com/public/api/events/create', {
      created_by_user_id: e[0].value,
      title: e[1].value,
      location: e[2].value,
      start_time: e[3].value,
      end_time: e[4].value,
      repeating_id: e[5].value,
      type_id: e[6].value,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  return (
    <>
      <form onSubmit={e => {
        addEvent(e.target);
        e.preventDefault();
      }}>

        <div className="form-group">
          <label htmlFor="created_by_user_id">Creator user ID</label>
          <input type="text" className="form-control" id="created_by_user_id" placeholder="Enter User ID" />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="title">Title of event</label>
          <input type="text" className="form-control" id="title" placeholder="Enter Title" />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="location">Where will it take place?</label>
          <input type="text" className="form-control" id="location" placeholder="Enter Location" />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="start_time">When will the event start?</label>
          <input type="text" className="form-control" id="start_time" placeholder="Enter Start Time" />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="end_time">When will the event end?</label>
          <input type="text" className="form-control" id="end_time" placeholder="Enter End Time" />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="repeating_id">Choose if the event will repeat</label>
          <input type="text" className="form-control" id="repeating_id" placeholder="Enter repeat type id" />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="type_id">Choose what type of event this is</label>
          <input type="text" className="form-control" id="type_id" placeholder="Enter event type id" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </>
  );
}

export default App;
