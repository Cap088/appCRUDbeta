//iniciar la lista con la pagina
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Funcion para mostrar lista

function displayTasks(){
  const taskLIst = document.getElementById('taskList');
  taskLIst.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');

  const tasktext = document.createElement('p');
  tasktext.textContent = task;
  li.appendChild(tasktext);

  const editButton = document.createElement('button');
      editButton.className = 'b-edicion'; //clase editar
      editButton.textContent = 'Editar Rutina';
      editButton.onclick = () => editTask(index);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'b-borrado'; // clase eliminar
      deleteButton.textContent = 'Borrar Rutina';
      deleteButton.onclick = () => deleteTask(index);

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskLIst.appendChild(li);

    });
}

//Funcion para agregar rutinas.

function addTask() {
  const taskInput = document.getElementById('task');
  const newTask = taskInput.value;
  if (newTask) {
    tasks.push(newTask);
    taskInput.value = '';
    localStorage.setItem('task', JSON.stringify(tasks));
    displayTasks();
  }
}

//Funcion para edicion.

function editTask(index) {
  const updatedTask = prompt('Editar rutinas', tasks[index]);
  if (updatedTask !== null) {
    tasks[index]= updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}

//Funcion para eliminar rutinas

function deleteTask(index) {
  if (confirm('¿En realidad deseas eliminar la rutina?')){
    tasks.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(task));
    displayTasks();
  }

}

//Visualizacion de rutinas

/* displayTasks(); */