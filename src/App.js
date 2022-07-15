import logo from './logo.svg';
import './App.css';
import Pure from './Components/Pure';
import Parent from './Components/Parent';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundry from './Components/ErrorBoundry';

function App() {
  return (
    <div className="App">
      {/* <FragmentsDemo/> */}
      {/* <Pure/> */}

      {/* <Parent/> */}

      {/* <RefsDemo /> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Batman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="SuparMan" />
      </ErrorBoundry>
    




    </div>
  );
}

export default App;
