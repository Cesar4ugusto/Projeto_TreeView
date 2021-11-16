import React from 'react';
import TreeView from './components/TreeView/TreeView';

const tree = [
  { 
    title: 'user',
    items: [
      {
        title: 'criar'
      },
      {
        title: 'editar'
      },
    ]
  },
  { 
    title: 'user',
    items: [
      {
        title: 'editar',
      }
    ],
  },
]

function App() {
  return (
    <div className="App">
      <TreeView tree={ tree } />
    </div>
  );
}

export default App;
