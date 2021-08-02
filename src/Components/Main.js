import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';

class Main extends React.Component {
  render() {
    let arrayElements = data.map(element => {
      return <HornedBeast img={element.image_url}
        title={element.title}
        description={element.description}
        keyword={element.keyword}
        horns={element.horns} />;
    });
    return (
      <main>
        {arrayElements}
      </main>
    );
  }
}

export default Main;
