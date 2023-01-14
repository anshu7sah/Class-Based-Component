import React from "react";

const UserContext = React.createContext({
  users: [],
});

export default UserContext;

// WE can use context.consumer in both functional and class based
// components as <context.consumer>{value={code }}
