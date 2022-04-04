import Box from "./Box";
import { animals } from "./animals";

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;













const App = () => {
  return (
    <main>
      {animals.map((person) => (
        <Box
          key={person.name}
          name={person.name}
          images={person.images}
          likes={person.likes}
        />
      ))}
    </main>
  );
};
export default App;
