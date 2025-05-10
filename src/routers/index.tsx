import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Curriculum } from "../pages/curriculum";
import { Contact } from "../pages/contact";
import { NotFound } from "../pages/not-found";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
