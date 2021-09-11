import React from "react";
import Header from "../Header/Header";
import Results from "../Results/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
// import "./Components/App/App.css";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: "Name It!!!",
      headerExpanded: true,
      suggestedNames: [],
    };
  }

  handleInputChange = (inputText) => {
    // console.log(name(inputText));
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <Results suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
