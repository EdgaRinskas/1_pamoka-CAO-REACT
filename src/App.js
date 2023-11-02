import logo from './logo.svg';
import './App.css';

function ContentsWrapper() {
  const contentsWrapperStyle = {
    backgroundColor: '#ffffff',
    width: '100%',
    display: 'flex',
  };

  const contentSubHeaderStyle = {
    width: '66.66%',
    display: 'flex',
    flexDirection: 'column',
  };

  const contentStyle = {
    flex: '1',
  };

  const navigationStyle = {
    width: '33.33%',
    backgroundColor: '#ececec',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  };

  const textBoxListStyle = {
    listStyleType: 'none',
    padding: '5px',
    flex: '1',
    textAlign: 'left',
    margin: '5px',
  };

  const navigationTitleStyle = {
    textAlign: 'left',
  };

  return (
    <div style={contentsWrapperStyle}>
      <div style={contentSubHeaderStyle}>
        <div style={contentStyle}>
          <h1>Contents</h1>
          <p>
            Liolium et fliuksum. Et fliuksum et liolium. Kepurn gurgum est. Liolium et fliuksum. Et fliuksum et liolium. Kepurn gurgum est. Liolium et fliuksum. Et fliuksum et liolium. Kepurn gurgum est.
          </p>
        </div>
        <div style={contentStyle}>
          <h1>Sub Header</h1>
          <p>
            Grus grus est avesi grandum. Et fliuksum et liolium. Kepurn gurgum est. Liolium et fliuksum. Liolium et fliuksum. Et fliuksum et liolium. Kepurn gurgum est. Liolium et fliuksum. Et fliuksum et liolium. Kepurn gurgum est. Liolium et fliuksum.
          </p>
        </div>
      </div>
      <div style={navigationStyle}>
        <h3 style={navigationTitleStyle}>Navigation</h3>
        <ul style={textBoxListStyle}>
          <li>Home</li>
          <li>Product</li>
          <li>Company</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

function LogoWrapper() {
  const logoWrapperStyle = {
    backgroundColor: 'white',
    color: '#222c2e',
    textAlign: 'left',
    padding: '10px',
  };

  return (
    <div style={logoWrapperStyle}>
      <div className="LogoText">
        <span>site</span>
        <span className="Pipe">|</span>
        <span>logo</span>
      </div>
    </div>
  );
}

function Header() {
  const headerStyle = {
    backgroundColor: '#1a3441',
    color: '#c3d0e0',
    textAlign: 'left',
    padding: '5px',
  };

  const linkStyle = {
    margin: '5px',
    textDecoration: 'none',
    color: '#c3d0e0',
  };

  return (
    <div style={headerStyle}>
      <a style={linkStyle} href="#">Home</a>
      <a style={linkStyle} href="#">Product</a>
      <a style={linkStyle} href="#">Company</a>
      <a style={linkStyle} href="#">Contact</a>
    </div>
  );
}

function HeaderImage() {
  const headerImageStyle = {
    backgroundColor: '#aec43b',
    height: '400px',
    textAlign: 'center',
    margin: '5px',
  };

  return (
    <div style={headerImageStyle}>
      <h1>Header Image</h1>
    </div>
  );
}

function TextBox(props) {
  const textBoxStyle = {
    backgroundColor: '#ffffff',
    color: '#303030',
    flex: '1',
    margin: '0 5px',
    padding: '10px',
  };

  return (
    <div style={textBoxStyle}>
      {props.text}
    </div>
  );
}

function TextWrapper() {
  const textWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '5px',
  };

  return (
    <div style={textWrapperStyle}>
      <TextBox text="Liorium schlipsum dribsum apiplensium von der vunderschone nacht" />
      <TextBox text="Liorium schlipsum dribsum apiplensium von der vunderschone nacht" />
      <TextBox text="Liorium schlipsum dribsum apiplensium von der vunderschone nacht" />
    </div>
  );
}

function App() {
  const bodyStyle = {
    backgroundColor: '#f1f1f1', // Set background color for the whole window
  };

  return (
    <div className="App" style={bodyStyle}>
      <LogoWrapper />
      <Header />
      <HeaderImage />
      <TextWrapper />
      <ContentsWrapper />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Four Lessons
        </a>
      </header>
    </div>
  );
}

export default App;
