import React, { useReducer } from 'react';

export default (reducer: any, actions: any, defaultState: any) => {
  const Context = React.createContext(null);

  const Provider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const boundAction: any = {};
    for (let key in actions) {
      boundAction[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundAction }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
