import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
    };
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;