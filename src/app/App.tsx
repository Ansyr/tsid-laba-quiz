import React from 'react';
import './App.css';
import {CardQuestion} from "./modules/test/ui/card-question";
import {questions} from "./modules/test/const/questions";

function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased bg-gray-400 ">
        <div className={"mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full"}>
            <CardQuestion questions={questions}/>
        </div>
    </div>
  );
}

export default App;
