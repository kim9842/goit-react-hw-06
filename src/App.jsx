import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </>
  );
}

export default App;
