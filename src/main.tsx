import { createRoot } from 'react-dom/client';
import './styles/main.css';
import './styles/phase3.css';
import './styles/phase4.css';
import './styles/phase5.css';
import './styles/phase6.css';
import App from './App';

// StrictMode is intentionally off: legacy init manipulates the DOM once.
createRoot(document.getElementById('root')!).render(<App />);
