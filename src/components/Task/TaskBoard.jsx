/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { useTaskContext } from "./context/TaskContext";
import { TaskProvider } from "./context/TaskReducer";

const TaskBoard = () => {
  const { state, dispatch } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredTasks = state.tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch({ type: "SET_FILTERED_TASKS", payload: filteredTasks });
  }, [searchQuery, state.tasks]);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      dispatch({ type: "ADD_TASK", payload: newTask });
    } else {
      dispatch({ type: "EDIT_TASK", payload: newTask });
    }
  };

  const handleEditTask = (task) => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { show: true, taskToUpdate: task },
    });
  };

  const handleCloseClick = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: { show: false } });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL_TASKS" });
  };

  const handleFavourite = (taskId) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: taskId });
  };

  return (
    <section className="mb-20" id="tasks">
      {state.showModal && (
        <TaskProvider>
          <AddTaskModal
            onSave={handleAddEditTask}
            onCloseClick={handleCloseClick}
            taskToUpdate={state.taskToUpdate}
          />
        </TaskProvider>
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() =>
              dispatch({ type: "TOGGLE_MODAL", payload: { show: true } })
            }
            onDeleteAllClick={handleDeleteAll}
            onSearch={setSearchQuery}
          />
          {state.filteredTasks.length > 0 ? (
            <TaskList
              tasks={state.filteredTasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavourite}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

//Normal try

// import { useEffect, useReducer, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import AddTaskModal from "./AddTaskModal";
// import NoTaskFound from "./NoTaskFound";
// import TaskAction from "./TaskAction";
// import TaskList from "./TaskList";

// // Initial state
// const initialState = {
//   tasks: [
//     {
//       id: uuidv4(),
//       title: "Learn React",
//       description: "I want to Learn React",
//       tags: ["react"],
//       priority: "High",
//       isFavourite: true,
//     },
//     {
//       id: uuidv4(),
//       title: "JavaScript",
//       description: "I want to Learn JavaScript",
//       tags: ["js"],
//       priority: "Medium",
//       isFavourite: true,
//     },
//     {
//       id: uuidv4(),
//       title: "Calculus",
//       description: "I want to Learn Calculus",
//       tags: ["Learn"],
//       priority: "Low",
//       isFavourite: false,
//     },
//   ],
//   filteredTasks: [],
//   showModal: false,
//   taskToUpdate: null,
// };

// // Action types
// const ActionTypes = {
//   ADD_TASK: "ADD_TASK",
//   EDIT_TASK: "EDIT_TASK",
//   DELETE_TASK: "DELETE_TASK",
//   DELETE_ALL_TASKS: "DELETE_ALL_TASKS",
//   TOGGLE_MODAL: "TOGGLE_MODAL",
//   TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
//   SET_FILTERED_TASKS: "SET_FILTERED_TASKS",
// };

// // Reducer function
// function reducer(state, action) {
//   switch (action.type) {
//     case ActionTypes.ADD_TASK:
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//         showModal: false,
//       };
//     case ActionTypes.EDIT_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload.id ? action.payload : task
//         ),
//         showModal: false,
//       };
//     case ActionTypes.DELETE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     case ActionTypes.DELETE_ALL_TASKS:
//       return {
//         ...state,
//         tasks: [],
//       };
//     case ActionTypes.TOGGLE_MODAL:
//       return {
//         ...state,
//         showModal: action.payload.show,
//         taskToUpdate: action.payload.taskToUpdate || null,
//       };
//     case ActionTypes.TOGGLE_FAVOURITE:
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload
//             ? { ...task, isFavourite: !task.isFavourite }
//             : task
//         ),
//       };
//     case ActionTypes.SET_FILTERED_TASKS:
//       return {
//         ...state,
//         filteredTasks: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export default function TaskBoard() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const filteredTasks = state.tasks.filter((task) =>
//       task.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     dispatch({ type: ActionTypes.SET_FILTERED_TASKS, payload: filteredTasks });
//   }, [searchQuery, state.tasks]);

//   const handleAddEditTask = (newTask, isAdd) => {
//     if (isAdd) {
//       dispatch({ type: ActionTypes.ADD_TASK, payload: newTask });
//     } else {
//       dispatch({ type: ActionTypes.EDIT_TASK, payload: newTask });
//     }
//   };

//   const handleEditTask = (task) => {
//     dispatch({
//       type: ActionTypes.TOGGLE_MODAL,
//       payload: { show: true, taskToUpdate: task },
//     });
//   };

//   const handleCloseClick = () => {
//     dispatch({ type: ActionTypes.TOGGLE_MODAL, payload: { show: false } });
//   };

//   const handleDeleteTask = (taskId) => {
//     dispatch({ type: ActionTypes.DELETE_TASK, payload: taskId });
//   };

//   const handleDeleteAll = () => {
//     dispatch({ type: ActionTypes.DELETE_ALL_TASKS });
//   };

//   const handleFavourite = (taskId) => {
//     dispatch({ type: ActionTypes.TOGGLE_FAVOURITE, payload: taskId });
//   };

//   return (
//     <section className="mb-20" id="tasks">
//       {state.showModal && (
//         <AddTaskModal
//           onSave={handleAddEditTask}
//           onCloseClick={handleCloseClick}
//           taskToUpdate={state.taskToUpdate}
//         />
//       )}
//       <div className="container">
//         <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
//           <TaskAction
//             onAddClick={() =>
//               dispatch({
//                 type: ActionTypes.TOGGLE_MODAL,
//                 payload: { show: true },
//               })
//             }
//             onDeleteAllClick={handleDeleteAll}
//             tasks={state.tasks}
//             setTask={dispatch}
//             onSearch={setSearchQuery}
//           />
//           {state.filteredTasks.length > 0 ? (
//             <TaskList
//               tasks={state.filteredTasks}
//               onEdit={handleEditTask}
//               onDelete={handleDeleteTask}
//               onFav={handleFavourite}
//             />
//           ) : (
//             <NoTaskFound />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
// TaskBoard.js
