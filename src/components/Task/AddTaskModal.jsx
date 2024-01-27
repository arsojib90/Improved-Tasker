/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { useTaskContext } from "./context/TaskReducer";

export default function AddTaskModal({ onSave, taskToUpdate, onCloseClick }) {
  const { dispatch } = useTaskContext();
  const [task, setTask] = useState(
    taskToUpdate || {
      id: uuidv4(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavourite: false,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "tags") {
      const tagsArray = value.split(",").map((tag) => tag.trim());
      setTask((prevTask) => ({
        ...prevTask,
        tags: tagsArray,
      }));
    } else {
      setTask((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    }
  };

  const notify = () => toast.error("Please fill in all fields, Thank you!");

  const isFormValid =
    task.title && task.description && task.tags && task.priority;

  const isAdd = Object.is(taskToUpdate, null);

  const handleSave = () => {
    if (isFormValid) {
      onSave(task, isAdd);
    } else {
      notify();
    }
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0 "></div>
      <form className="mx-auto my-10 w-full max-w-[740px] z-10 rounded-xl  absolute top-1/4 left-[20%] md:left-1/4 border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={Array.isArray(task.tags) ? task.tags.join(",") : ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <div className="flex justify-between w-full">
            <button
              onClick={handleSave}
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              {isAdd ? "Create New Task" : "Save"}
            </button>
            <button
              onClick={onCloseClick}
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              {isAdd ? "Cancel" : "Close"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

// Normal try

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function AddTaskModal({ onSave, taskToUpdate, onCloseClick }) {
//   const [task, setTask] = useState(
//     taskToUpdate || {
//       id: crypto.randomUUID(),
//       title: "",
//       description: "",
//       tags: [],
//       priority: "",
//       isFavourite: false,
//     }
//   );

//   const handleChange = (e) => {
//     const name = e.target.name;
//     let value = e.target.value;
//     if (name === "tags") {
//       value = value.split(",");
//     }
//     setTask({
//       ...task,
//       [name]: value,
//     });
//   };

//   const notify = () => toast.error("Please fill in all fields,Thank you!");

//   const isFormValid =
//     task.title && task.description && task.tags && task.priority;

//   const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

//   return (
//     <>
//       <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0 "></div>
//       <form className="mx-auto my-10 w-full max-w-[740px] z-10 rounded-xl  absolute top-1/4 left-[20%] md:left-1/4 border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
//         <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
//           {isAdd ? "Add New Task" : "Edit Task"}
//         </h2>

//         <div className="space-y-9 text-white lg:space-y-10">
//           <div className="space-y-2 lg:space-y-3">
//             <label htmlFor="title">Title</label>
//             <input
//               className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
//               type="text"
//               name="title"
//               id="title"
//               value={task.title}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="space-y-2 lg:space-y-3">
//             <label htmlFor="description">Description</label>
//             <textarea
//               className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
//               type="text"
//               name="description"
//               id="description"
//               value={task.description}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
//             <div className="space-y-2 lg:space-y-3">
//               <label htmlFor="tags">Tags</label>
//               <input
//                 className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
//                 type="text"
//                 name="tags"
//                 id="tags"
//                 value={task.tags}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2 lg:space-y-3">
//               <label htmlFor="priority">Priority</label>
//               <select
//                 className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
//                 name="priority"
//                 id="priority"
//                 value={task.priority}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Priority</option>
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="High">High</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 flex justify-center lg:mt-20">
//           <div className="flex justify-between w-full">
//             <button
//               onClick={isFormValid ? () => onSave(task, isAdd) : notify}
//               className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
//             >
//               {isAdd ? "Create New Task" : "Save"}
//             </button>
//             <button
//               onClick={onCloseClick}
//               className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
//             >
//               {isAdd ? "Cancel" : "Close"}
//             </button>
//           </div>
//         </div>
//       </form>
//       <ToastContainer />
//     </>
//   );
// }
