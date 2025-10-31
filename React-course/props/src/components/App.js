import React, { useEffect, useState } from "react";
import "./App.css";

// class User extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   changeAge = (e) => {
//     this.setState({ age: e.target.value });
//   };
//   render() {
//     const { name, surname, link } = this.props;
//     return (
//       <div className="w-50 nx-auto">
//         <div className="border p-3 mt-5">
//           <h1>
//             Mening ismim {name} Familyam {surname}
//             <br /> yoshim {this.state.age}
//           </h1>
//           <a href={link}>Link</a>
//           <div className="mt-3">
//             <button
//               onClick={() => this.setState({ counter: this.state.counter + 1 })}
//               className="btn btn-success"
//             >
//               Increment
//             </button>

//             <button
//               onClick={() => this.setState({ counter: this.state.counter - 1 })}
//               className="btn btn-success"
//             >
//               Decrement
//             </button>

//             <button
//               onClick={() => this.setState({ counter: 0 })}
//               className="btn btn-success"
//             >
//               Reset
//             </button>
//             <p>Counter: {this.state.counter}</p>
//           </div>
//           <form>
//             <input
//               type="text"
//               placeholder="Enter your age"
//               onChange={this.changeAge}
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

const User = ({ name, surname, link }) => {
  const [counter, setCounter] = useState(0);
  // const [age, setAge] = useState(20);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);
  
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };
  const onReset = () => {
    setCounter(0);
  };

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1>
          Mening ismim {name}, Familyam {surname} <br /> yoshim {25}
        </h1>
        <a href={link}>Link</a>
        <p>Counter: {counter}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>
            +
          </button>
          <button className="btn btn-danger" onClick={onDecrement}>
            -
          </button>
          <button className="btn btn-reset" onClick={onReset}>
            Reset
          </button>
        </div>
        {isLogin ? <p className="text-center mt-3"> LOGIN</p> : null}
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary" onClick={toggleLogin}>
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="user-container">
      <User name="John" surname="Doe" link="https://example.com/johndoe" />
      <User name="Jane" surname="Smith" link="https://example.com/janesmith" />
    </div>
  );
};

export default App;
