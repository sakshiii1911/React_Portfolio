
import './App.css'
import Certificates from './components/Certificates.jsx'
import Header from './components/Header.jsx'
import { certificates, projectsList, skills, personalInfo } from './data.js'
import ProjectList from './components/ProjectList.jsx'
import Skills from './components/Skills.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Header data={personalInfo} />} />

                <Route path="/certificates" element={<Certificates data={certificates} />} />

                <Route path="/projects" element={<ProjectList data={projectsList} />} />

                <Route path="/skills" element={<Skills skills={skills} />} />

                <Route path="/contact" element={<ContactMe />} />

                <Route path="/personalinfo" element={<PersonalInfo data={personalInfo} />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App
