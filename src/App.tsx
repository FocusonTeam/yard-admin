import React from 'react';
import Routing from './services/Routing';
import {client} from './services/apollo';
import { ApolloProvider } from '@apollo/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';

function App() {

  return (
  <HashRouter>
    <ApolloProvider client={client} >
      <DndProvider backend={HTML5Backend}>
        <ReactNotifications />
        <Routing />
      </DndProvider>
    </ApolloProvider>
  </HashRouter>);
}

export default App;