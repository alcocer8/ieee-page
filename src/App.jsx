import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import CallForPapers from "./pages/CallForPapers";
import Program from "./pages/Program";  
import Topics from "./pages/Topics";
import Registration from "./pages/Registration";
import SubmissionOfPapers from "./pages/SubmissionOfPapers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/program" element={<Program />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/submission-of-papers"
              element={<SubmissionOfPapers />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
