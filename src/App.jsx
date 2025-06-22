import ContactForm from "./components/ContactForm1/ContactForm1";
import SearchBox from "./components/SearchBox1/SearchBox1";
import ContactList from "./components/ContactList1/ContactList1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default App;
