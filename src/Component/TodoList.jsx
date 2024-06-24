import React, { useState } from 'react';


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [aim, setAim] = useState('');

    const handleAddTask = () => {
        if (task.trim() && date && time && aim.trim()) {
            const newTask = { task, date, time, aim, id: Date.now() };
            setTasks([...tasks, newTask]);
            setTask('');
            setDate('');
            setTime('');
            setAim('');
        }
    };

    const handleDeleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <div className='firstrow'>
                <div className='logo'></div>
                <button className='title1'>My Lists </button>
                <button className='title'>Life <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"></path> <path d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#1C274C"></path> </g></svg></button>
                <button className='title1'>Work </button>
                <button className='title1'>New List <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"></path> <path d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#1C274C"></path> </g></svg></button>
            </div>
            <div className='middle'>
                <div className='me'>
                    <h1>GOOD MORNING!</h1>
                    <h2>What's your plan for today</h2>
                </div><br /><br />
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new List..."
                />
                <div className='row'>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                </div>
                <input
                    type="text"
                    value={aim}
                    onChange={(e) => setAim(e.target.value)}
                    placeholder="Aim for the day..."
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((item) => (
                    <li key={item.id} className="task-item">
                        <div>
                            <input type="checkbox" class="ui-checkbox"/>
                            <span>{item.task}</span>
                            <span>{item.date}</span>
                            <span>{item.time}</span>
                            <span>{item.aim}</span>
                        </div>
                        <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
            <div className='end'>
                            <div class="face">
                    <p class="v-index">II
                    </p>
                    <p class="h-index">II
                    </p>
                    <div class="hand">
                        <div class="hand">
                            <div class="hour"></div>
                            <div class="minute"></div>
                            <div class="second"></div>
                        </div>
                    </div>
                </div>
                
                                    <div class="notificationCard">
                    <p class="notificationHeading">Push notifications</p>
                    <svg class="bellIcon" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg>
                    <p class="notificationPara">Allow push notifications so you will get latest updates</p>
                    <div class="buttonContainer">
                        <button class="AllowBtn">Allow</button>
                        <button class="NotnowBtn">Now now</button>
                    </div>
                    </div>
            </div>
                             
                            
        </div>
    );
};

export default TodoList;

