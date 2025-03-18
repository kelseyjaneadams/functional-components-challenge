import css from "./App.module.css";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Loader from "./components/Loader";
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
      {/* <Content /> */}
      <Loader />
    </div>
  );
}

export default App;