export const data = {
  todolist: {
    id: createUniqId(),
    title: "to Learn",
    tasks: [
      {
        editMode: false,
        id: createUniqId(),
        title: "Learn HTML",
      },
      {
        id: createUniqId(),
        title: "Learn CSS",
      },
    ],
    addNewTaskDialog: {
        isOpen: false,
        error: null
    },
  },
};


function setError(error) {
    data.todolist.addNewTaskDialog.error = error;
    notifySubscriber();
}


// Функция для открытия диалога
export function openAddTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = true;
    notifySubscriber();
}

// Функция для закрытия диалога
export function closeAddTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = false;
    notifySubscriber();
    // Логика закрытия диалогового окна
}


let notifySubscriber = () => {
  console.warn("No data change subscriber");
};

export function subscribe(subscriber) {
  notifySubscriber = subscriber;
}

function createUniqId() {
  return Math.floor(Math.random() * 100000);
}

export function createTask(newTitle) {
  if (newTitle.trim().length > 0) {
    const newTask = {
      id: createUniqId(),
      title: newTitle,
    };
    data.todolist.tasks.push(newTask);
    notifySubscriber();
    return true;
  } else {
    setError("empty input");
    notifySubscriber();
    return false;
  }
}

export function deleteTask(id) {
  data.todolist.tasks = data.todolist.tasks.filter((t) => t.id !== id);
  notifySubscriber();
}