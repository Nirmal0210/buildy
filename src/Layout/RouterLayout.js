import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../Common/Error'
import About from '../Pages/About/About'
import BlogDetails from '../Pages/Blogs/BlogDetails'
import Blogs from '../Pages/Blogs/Blogs'
import Career from '../Pages/Career/Career'
import CareerForm from '../Pages/Career/CareerForm'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Home from '../Pages/Home/Home'
import ProjectDetails from '../Pages/Projects/ProjectDetails'
import Projects from '../Pages/Projects/Projects'
import ServiceDetails from '../Pages/Services/ServiceDetails'
import Services from '../Pages/Services/Services'

const RouterLayout = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/servicedetails' element={<ServiceDetails />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/projectdetails' element={<ProjectDetails />} />
            <Route exact path='/blogs' element={<Blogs />} />
            <Route exact path='/blogdetails' element={<BlogDetails />} />
            <Route exact path='/career' element={<Career />} />
            <Route exact path='/careerform' element={<CareerForm />} />
            <Route exact path='/contactus' element={<ContactUs />} />
            <Route exact path='/error' element={<Error />} />
        </Routes>
    )
}

export default RouterLayout