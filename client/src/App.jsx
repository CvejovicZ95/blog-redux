import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BlogList } from "./components/homePage/BlogList"
import { UsersList } from "./components/users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
       
        <Route index element={<BlogList />} />
        
        <Route path="users" element={<UsersList />} />

      </Route>
    </Routes>
  );
}

export default App;
