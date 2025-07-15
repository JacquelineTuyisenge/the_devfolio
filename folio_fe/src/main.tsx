import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import BlogDetail from './BlogDetail.tsx';
import BlogsPage from './BlogsPage.tsx';
import ProjectsPage from './ProjectsPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
