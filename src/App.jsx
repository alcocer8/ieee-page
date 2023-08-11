import { Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import CallForPapers from "./pages/CallForPapers";
import Program from "./pages/Program";
import Topics from "./pages/Topics";
import Registration from "./pages/Registration";
import SubmissionOfPapers from "./pages/SubmissionOfPapers";
import Becapage from "./pages/Becapage";
import Survey from "./pages/Survey";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/program" element={<Program />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committees" />
            <Route
              path="/submission-of-papers"
              element={<SubmissionOfPapers />}
            />
            <Route path="/beca" element={<Becapage />} /> 
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
