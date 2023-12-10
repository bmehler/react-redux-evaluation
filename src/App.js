import React from 'react';
import MainSection from './components/MainSection'

const App = () => {
    return (
        <div className="container-fluid demo">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <span>DEMO - Human Resource Tool mit React Redux. No data are saved!</span>
                    </div>
                </div>
            </div>
            <div className="intro">
                <MainSection/>
            </div>
        </div>
    )
}

export default App