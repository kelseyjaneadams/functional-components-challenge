import css from "./App.module.css";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      {/* <ContentHooks /> */}
      {/* <Content /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
      <Loader />
    </div>
  );
}

export default App;