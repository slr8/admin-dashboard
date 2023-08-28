import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import Team from "./components/Team/Team";
import Contacts from "./components/Contacts/Contacts";
import Invoices from "./components/Invoices/Invoices";
import Form from "./components/Form/Form";
import Calendar from "./components/Calendar/Calendar";
import FAQ from "./components/FAQ/FAQ";
import Bar from "./components/Bar/Bar";
import Pie from "./components/Pie/Pie";
import Line from "./components/Line/Line";
import Geo from "./components/Geo/Geo";

function App() {
  return (
    <div className="app">
      <main className="content">
        <div className="div" style={{ display: 'flex' }}>
          <div style={{ width: '15%', height: '100vh' }}>
            <Sidebar />
          </div>
          <div style={{ width: '80%' }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geo />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
