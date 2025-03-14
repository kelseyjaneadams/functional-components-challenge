import css from "./App.module.css";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;