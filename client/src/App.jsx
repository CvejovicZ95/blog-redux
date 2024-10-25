import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BlogList } from "./components/homePage/BlogList"
import { UsersList } from "./components/users/UsersList";
import { SingleBlogPage } from "./components/singleBlogPage/SingleBlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
       
        <Route index element={<BlogList />} />
        
        <Route path="users" element={<UsersList />} />

        <Route path="blog/:blogId" element={<SingleBlogPage/>}/>

      </Route>
    </Routes>
  );
}

export default App;
