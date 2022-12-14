import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import LandingPage from './components/landing';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      {/* <LandingPage></LandingPage> */}
      <Form></Form>

    </div>

    <div>
      <Footer></Footer>
    </div>

    </>
  );
}

export default App;
