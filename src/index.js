import React from 'react';
import ReactDOM from 'react-dom';

// CSS imporst
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/earth-alliance.css";


// Component imports
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import AboutSection from "./components/about";
import ProjectsSections from "./components/projects";
import NameForm from "./components/contact"




class App extends React.Component {
    render() {
      return (
        <div>
          <Sidebar />
          <Header />
          <AboutSection />
          <ProjectsSections />
          <NameForm />
        </div>
      );
    }
  }

const rootElem = document.getElementById('root')

ReactDOM.render(<App />, rootElem);

