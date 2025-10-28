const User = ({ name, surname, link}) => {
  return (
    <div>
      <h1>
        Mening ismim {name} Familyam {surname}
      </h1>
      <a href={link}>Link</a>
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
