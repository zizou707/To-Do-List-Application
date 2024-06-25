// Declaring some states to use globaly
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskList, setTaskList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("taskList")) ?? [];
    } catch {
      console.error("The tasks could not be parsed into JSON.");
      return [];
    }
 } );


  

  return (
      <GlobalContext.Provider
        value={{
          taskList,
          setTaskList,
          title,
          setTitle,
          description,
          setDescription
        }}
      >
        {children}
      </GlobalContext.Provider>
  );
};

export default GlobalState; 
