import React, { useEffect, useState, useContext } from "react";
import { getAllTodos, getUser } from "../helper/apicaller";
import { TailSpin } from "react-loader-spinner";
import Userdetails from "./userdetails";
import { useStateContext } from "../context/context";

const Todos = () => {
  useEffect(() => {
    getAllTodos().then((data) => {
      setTodoData(data);
    });
  }, []);

  const [todoData, setTodoData] = useState([]);
  const { setUserData, setTodoDetails, setClick } = useStateContext();

  console.log(todoData);

  const getUserData = (idData, todoId, todoTitle) => {
    getUser(idData).then((data) => {
      setUserData(data);
      setTodoDetails({ todoId: todoId, todoTitle: todoTitle });
      setClick(true);
    });
  };

  return (
    <div>
      <h1>Todos</h1>
      <div className="todoLayout">
        {todoData ? (
          <>
            {" "}
            <table>
              <tr>
                <th>ToDo ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Title</th>
                <th>Stetus</th>
                <th>Action</th>
              </tr>

              {todoData.map((todo) => {
                return (
                  <>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.complete}</td>
                      <td>
                        <button
                          className="editbtn"
                          onClick={() => {
                            getUserData(todo.userId, todo.id, todo.title);
                          }}
                        >
                          View User
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </>
        ) : (
          <>
            {" "}
            <TailSpin color="#00BFFF" height={80} width={80} />
          </>
        )}
      </div>
    </div>
  );
};

export default Todos;
