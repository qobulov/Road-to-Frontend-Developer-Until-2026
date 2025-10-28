const User = (props) => {
  return (
    <div>
      <h1>
        Mening ismim {props.name} Familyam {props.surname}
      </h1>
      <a href={props.link}>Link</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <User name="John" surname="Doe" link="https://example.com/johndoe" />
      <User name="Jane" surname="Smith" link="https://example.com/janesmith" />
    </div>
  );
};

export default App;
