import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 51
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Title : {this.state.txt}</p>
        <p>Cat : {this.state.cat}</p>
        <input type="text" value={this.state.txt} onChange={this.update.bind(this)} />
      </div>
    );
  }
}

export default App
