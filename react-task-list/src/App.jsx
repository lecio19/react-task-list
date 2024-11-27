import './App.css'

function counter(tasks) {
  let counterTodo = 0;
  let counterDone = 0;

  tasks.forEach((task) => {
    if (task.state === "completed") {
      counterDone++;
    } else {
      counterTodo++;
    }
  });

  return { counterTodo, counterDone };
}

function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];

  // Filtra i task con stato 'backlog' o 'in_progress'
  const tasksTodo = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );

  const completedTasks = tasks.filter(
    (task) => task.state === "completed"
  );



  // Ottieni i conteggi dei task
  const { counterTodo, counterDone } = counter(tasks);

  return (
    <>
      {/* TITOLO */}
      <header className="titleContainer">
        <h1 className="mainTitle">Task Manager</h1>
      </header>

      {/* CURRENT TASK */}
      <div>
        <h2 className="taskStatus">CURRENT TASKS ({counterTodo})</h2>
        <ul>
          {tasksTodo.map((task) => (
            <li key={task.id} className="task">
              <h2 className="taskTitle">{task.title}</h2>
              <p>Priority: {task.priority}</p>
              <p>Est.time: {task.estimatedTime}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr />

      {/* COMPLETED TASKS */}
      <div>
        <h2 className="taskStatus">COMPLETED TASKS ({counterDone})</h2>
        <ul>
          {completedTasks.map((task) => (
            <li key={task.id} className="task">
              <h2 className="taskTitle">{task.title}</h2>
              <p>Priority: {task.priority}</p>
              <p>Est.time: {task.estimatedTime}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <hr />
    </>
  );
}


export default App
