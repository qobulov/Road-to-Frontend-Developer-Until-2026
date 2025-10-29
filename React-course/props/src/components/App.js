import React from "react";
import "./App.css";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  changeAge = (e) => {
    this.setState({ age: e.target.value });
  };
  render() {
    const { name, surname, link } = this.props;
    return (
      <div className="w-50 nx-auto">
        <div className="border p-3 mt-5">
          <h1>
            Mening ismim {name} Familyam {surname}
            <br /> yoshim {this.state.age}
          </h1>
          <a href={link}>Link</a>
          <div className="mt-3">
            <button
              onClick={() => this.setState({ counter: this.state.counter + 1 })}
              className="btn btn-success"
            >
              Increment
            </button>

            <button
              onClick={() => this.setState({ counter: this.state.counter - 1 })}
              className="btn btn-success"
            >
              Decrement
            </button>

            <button
              onClick={() => this.setState({ counter: 0 })}
              className="btn btn-success"
            >
              Reset
            </button>
            <p>Counter: {this.state.counter}</p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Enter your age"
              onChange={this.changeAge}
            />
          </form>
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="user-container">
      <User name="John" surname="Doe" link="https://example.com/johndoe" />
      <User name="Jane" surname="Smith" link="https://example.com/janesmith" />
    </div>
  );
};

export default App;
