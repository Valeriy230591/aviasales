import style from "./App.module.scss";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import TiketList from "../TiketList/TiketList";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.main}>
        <Filter />
        <TiketList />
      </div>
    </div>
  );
}

export default App;
