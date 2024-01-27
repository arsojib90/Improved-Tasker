/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// TaskContext.js
import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      title: "Learn React",
      description: "I want to Learn React",
      tags: ["react"],
      priority: "High",
      isFavourite: true,
    },
    {
      id: uuidv4(),
      title: "JavaScript",
      description: "I want to Learn JavaScript",
      tags: ["js"],
      priority: "Medium",
      isFavourite: true,
    },
    {
      id: uuidv4(),
      title: "Calculus",
      description: "I want to Learn Calculus",
      tags: ["Learn"],
      priority: "Low",
      isFavourite: false,
    },
  ],
  filteredTasks: [],
  showModal: false,
  taskToUpdate: null,
};

const ActionTypes = {
  ADD_TASK: "ADD_TASK",
  EDIT_TASK: "EDIT_TASK",
  DELETE_TASK: "DELETE_TASK",
  DELETE_ALL_TASKS: "DELETE_ALL_TASKS",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  SET_FILTERED_TASKS: "SET_FILTERED_TASKS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        showModal: false,
      };
    case ActionTypes.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        showModal: false,
      };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case ActionTypes.DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: [],
      };
    case ActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload.show,
        taskToUpdate: action.payload.taskToUpdate || null,
      };
    case ActionTypes.TOGGLE_FAVOURITE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isFavourite: !task.isFavourite }
            : task
        ),
      };
    case ActionTypes.SET_FILTERED_TASKS:
      return {
        ...state,
        filteredTasks: action.payload,
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
