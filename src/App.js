// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import "./App.js"

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
