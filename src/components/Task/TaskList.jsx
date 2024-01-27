/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { FaStar } from "react-icons/fa";

// export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
//   const tagColors = {
//     js: "#FF6347",
//     web: "#4682B4",
//     react: "#32CD32",
//     python: "#4682B4",
//     html: "#32CD32",
//     css: "#32CD32",
//   };

//   return (
//     <div className="overflow-auto">
//       <table className="table-fixed overflow-auto xl:w-full">
//         <thead>
//           <tr>
//             <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
//             <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
//               Title
//             </th>
//             <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
//               Description
//             </th>
//             <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
//               Tags
//             </th>
//             <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
//               Priority
//             </th>
//             <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
//               Options
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task) => (
//             <tr
//               key={task.id}
//               className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
//             >
//               <td>
//                 <button onClick={() => onFav(task.id)}>
//                   {task.isFavourite ? (
//                     <FaStar color="yellow" />
//                   ) : (
//                     <FaStar color="gray" />
//                   )}
//                 </button>
//               </td>
//               <td>{task.title}</td>
//               <td>
//                 <div className="text-center">{task.description}</div>
//               </td>
//               <td>
//                 <ul className="flex justify-center gap-1.5 flex-wrap">
//                   {task.tags.map((tag) => (
//                     <li key={tag}>
//                       <span
//                         className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize"
//                         style={{ backgroundColor: tagColors[tag] || "#000000" }}
//                       >
//                         {tag}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </td>
//               <td className="text-center">{task.priority}</td>
//               <td>
//                 <div className="flex items-center justify-center space-x-3">
//                   <button
//                     onClick={() => onDelete(task.id)}
//                     className="text-red-500"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => onEdit(task)}
//                     className="text-blue-500"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { FaStar } from "react-icons/fa";

const TaskList = ({ tasks, onEdit, onDelete, onFav }) => {
  const tagColors = {
    js: "#FF6347",
    web: "#4682B4",
    react: "#32CD32",
    python: "#4682B4",
    html: "#32CD32",
    css: "#32CD32",
  };

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              <td>
                <button onClick={() => onFav(task.id)}>
                  {task.isFavourite ? (
                    <FaStar color="yellow" />
                  ) : (
                    <FaStar color="gray" />
                  )}
                </button>
              </td>
              <td>{task.title}</td>
              <td>
                <div className="text-center">{task.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {Array.isArray(task.tags) &&
                    task.tags.map((tag) => (
                      <li key={tag}>
                        <span
                          className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize"
                          style={{
                            backgroundColor: tagColors[tag] || "#000000",
                          }}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
