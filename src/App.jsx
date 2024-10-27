import { useState } from "react";
import DisplayUser from "./components/DisplayUser";
import ContactForm from "./components/ContactForm";
import "./components/ContactForm.css";
import "./components/DisplayUser.css";
import "./App.css";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import SingleFriend from "./components/SingleFriend";

//Task-1
const App = () => {
  const [user, setUser] = useState({
    name: "Nethra",
    email: "Nethra.purma@example.com",
    password: "Nethra",
    age: 28,
  });

  return (
    <>
      <div className="App">
        <h1>User Information</h1>

        <Layout>
          <Routes>
            <Route path="/friends" element={<FriendsList />} />
            <Route path="name/:id" element={<SingleFriend />} />
            
            {/* Home route */}
            <Route index element={<DisplayUser user={user} />} />
            {/* Contact page route */}
            <Route path="contact" element={<ContactForm />} />
            {/* Catch-all route for non-existing pages */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Layout>
      </div>
    </>
  );
};
export default App;
