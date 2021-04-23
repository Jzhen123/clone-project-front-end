import './App.css';
import axios from 'axios';

function App() {

  const addEvent = () => {
    axios.post('https://clone-project-back-end-jiayuzheng01421007.codeanyapp.com/public/api/events/create', {
      created_by_user_id: '1',
      title: 'Hello, world',
      location: 'Awesome inc',
      start_time: '2021-04-23 10:00:00',
      end_time: '2021-04-24 10:00:00',
      repeating_id: '1',
      type_id: '1',
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
      <div>
        Hello, world!
      </div>
      <button type="button" className="btn btn-primary" onClick={addEvent}>Primary</button>
    </>
  );
}

export default App;
