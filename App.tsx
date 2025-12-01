import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';
import { ViewState } from './types';

const App: React.FC = () => {
  // Simple state-based routing to ensure compatibility in all environments
  // without relying on browser history API limitations in some previews.
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Home onChangeView={setCurrentView} />;
      case 'MENU':
        return <Menu />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home onChangeView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {renderView()}
      {/* <ChatWidget /> */}
    </Layout>
  );
};

export default App;