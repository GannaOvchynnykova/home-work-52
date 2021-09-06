import './App.css';
import Button from './Button.js';
import Title from './Title.js';
import Text from './Text.js';


export default function App() {
  return (
    <div className="App" style={{ color: 'darkblue',  width: '500px' }}>
      <Title/>
      <Text/>
      <Button/>
    </div>
  );
}

