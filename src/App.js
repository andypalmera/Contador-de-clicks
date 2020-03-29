import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Clickers from './components/Clickers/Clickers';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                    {/* ===== */}
                    <div className="mt-5">
                        <Clickers />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
