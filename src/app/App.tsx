import React from 'react';
import './styles/App.css';

import {questions} from "../modules/test/const/questions";
import {TestCardQuestion} from "../modules/test/ui/test-card-question";


function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased bg-gray-400 ">
        <div className={"mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full min-h-screen flex justify-center items-center"}>
            <div className={"w-full"}>
                <TestCardQuestion questions={questions}/>
            </div>
        </div>
    </div>
  );
}

export default App;
