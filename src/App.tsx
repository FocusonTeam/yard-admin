import React from 'react';
import Routing from './services/Routing';
import {client} from './services/apollo';
import { ApolloProvider } from '@apollo/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
  <ApolloProvider client={client} >
    <DndProvider backend={HTML5Backend}>
      <Routing />
    </DndProvider>
  </ApolloProvider>);
}

export default App;