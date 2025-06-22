import ContactForm from "./components/contactForm/contactForm";
import SearchBox from "./components/SearchBox/searchBox";
import ContactList from "./components/ContactList/contactList";
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
