import { Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import CallForPapers from "./pages/CallForPapers";
import Topics from "./pages/Topics";
import Registration from "./pages/Registration";
import SubmissionOfPapers from "./pages/SubmissionOfPapers";
import Becapage from "./pages/Becapage";
import Industries from "./pages/Industries";
import CamaraReady from "./pages/CamaraReady";
import Hotel from "./pages/Hotel";
import Program from "./pages/Program";
import Keynotes from "./pages/Keynotes";
import Committe from "./pages/Committe";
import CallForPaper2024 from "./pages/CallForPaper2024";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/call-for-papers-2024" element={<CallForPaper2024 />} />
            {/* <Route path="/templates" element={<Templates />} /> */}
            <Route path="/topics" element={<Topics />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committe" element={<Committe/>}/>
            <Route
              path="/submission-of-papers"
              element={<SubmissionOfPapers />}
            />
            <Route path="/camara" element={<CamaraReady />} />
            <Route path="/beca" element={<Becapage />} />
            <Route path="/industry" element={<Industries />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/program" element={<Program />} />
            <Route path="/keynotes" element={<Keynotes />} />
            
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
