import React from "react";
import { useStateContext } from "../context/context";
import { TailSpin } from "react-loader-spinner";

const Userdetails = () => {
  const { userData, todoDetails, click } = useStateContext();

  console.log(userData);
  console.log(todoDetails);
  console.log(click);

  return (
    <div>
      {todoDetails != undefined ? (
        <div className="userDetailsLayout">
          <h1>TodoID :{todoDetails ? todoDetails.todoId : ""}</h1>
          <h1>TodoTitle :{todoDetails ? todoDetails.todoTitle : ""}</h1>
          <h1>UserID :{userData ? userData.id : ""}</h1>
          <h1>Name :{userData ? userData.name : ""}</h1>
          <h1>Email :{userData ? userData.email : ""}</h1>
        </div>
      ) : (
        <>
          {click ? (
            <div className="loader">
              <TailSpin color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Userdetails;
