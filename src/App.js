import React from "react";

import { Provider } from "react-redux";

import store from "./store/store";

import UserGroupList from "./components/UserGroupList";

import AddUserGroup from "./components/AddUserGroup";

const App = () => {
  console.log("Hello world");
  return (
    /*<div>
            <h1>HELLO WORLD</h1>
          </div>*/

    <Provider store={store}>
      <div className="App">
        <h1>User Groups</h1>

        <AddUserGroup />

        <UserGroupList />
      </div>
    </Provider>
  );
};

export default App;
