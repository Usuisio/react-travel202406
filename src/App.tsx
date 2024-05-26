import "./App.css";
import { Landing } from "./Landing/Landing";
import { PlanPage_common } from "./PlanPage/PlanPage_common";
import { createContext, useState } from "react";


export const pageContext = createContext({ page: "", setLanding: () => {}, set622: () => {}, set623: () => {}, set624: () => {} });

function App() {
  const [page, setPage] = useState("landing");
  const setLanding = () => {setPage("landing")};
  const set622 = () => {setPage("622")};
  const set623 = () => {setPage("623")};
  const set624 = () => {setPage("624")};

  const pageContextValue = {
    page,
    setLanding,
    set622,
    set623,
    set624
  };
  return (
    <>
      <pageContext.Provider value={pageContextValue}>
        {page === "landing" ?  <Landing/> :
        page === "622" ? <PlanPage_common visitDate="622"/> :
        page === "623" ? <PlanPage_common visitDate="623"/> : 
        page === "624" ? <PlanPage_common visitDate="624"/> : <h1>なんか変だぞ</h1>}
      </pageContext.Provider>
    </>
  );
}

export default App;
