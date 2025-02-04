
import './App.scss';
import editSvg from "./img/edit.svg"
import trushSvg from "./img/trush.svg"
import arrow from "./img/arrow.png"
import display from "./img/display.svg"
import vector from "./img/vector.svg"
import { useState } from 'react';
import Modal from './Components/Modal.jsx';
import emptyImg from "./img/empty.png"
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleApplyModal = (inputValue) => {
    console.log(inputValue);
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    console.log(tasks);
    console.log('Note applied:', inputValue);
  };

  const [disaplay, SetDisplay] = useState('AppDark')
  const [open, setOpen] = useState('close')
  const [textfilter, setTextFilter] = useState('ALL')
  const handleDisplayChange = () => {
    const newMode = disaplay === 'AppDark' ? 'AppWhite' : 'AppDark';
    document.body.className = newMode;
    SetDisplay(newMode);
  };
  const handleOpenContainer = () => {
    const click = open === 'open' ? 'close' : 'open';
    setOpen(click)
  }
  const handleFilterChange = (value) => {  
    setTextFilter(value)
  }
  return (
    <div className="App">
      <div className="todolist_container">
        <h1>TODO LIST</h1>
        <div className="line_one_row">
          <div className="input_search">
            <input type="text" className='search' placeholder='Search note...' />
            <div className="all_btn">
              <button className='choosen' onClick={() => { handleOpenContainer() }}> <p>{textfilter}</p> <img src={arrow} alt="" /></button>
              {open === 'open' && (<div className="container_open">
                <div className="filter_task" onClick={() => { handleFilterChange("All") }}><p>All</p></div>
                <div className="filter_task" onClick={() => { handleFilterChange("Complete") }}><p>Complete</p></div>
                <div className="filter_task" onClick={() => { handleFilterChange("Incomplete") }}><p>Incomplete</p></div>

              </div>
              )}
            </div>
            <button className='display' onClick={() => handleDisplayChange()}><img src={display} alt="" /></button>
          </div>
        </div>
        <div className="tasks_group">
          {tasks.length === 0 && (
            <div className="empty-state">
              <img src={emptyImg} alt="No tasks" />
              <h3>Empty...</h3>
            </div>
          )}
          {tasks.map((note, index) => (
            <div key={index} className="task">
              <div className="left">
                <div className="check"></div>
                <h2>{note}</h2>
              </div>
              <div className="right">
                <img src={editSvg} alt="" />
                <img src={trushSvg} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="new_task_line">
          <button className='addtask' onClick={openModal}>
            <img src={vector} alt="" />
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} ApplyModal={handleApplyModal} />
    </div>
  );
}

export default App;
