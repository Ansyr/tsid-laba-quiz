
import React, {useState} from "react";

import {Test, TreeNode} from "../../const/type";
import Card from "../../../../shared/card";
import Button from "../../../../shared/button";

interface CardQuestionPros {
    questions: TreeNode<Test>
}

export const TestCardQuestion = (props: CardQuestionPros) => {
    const {questions} = props
    const [question, setQuestion] = useState(questions)
    const handleClickYes = () => {
        if(question?.yes) {
            setQuestion(question?.yes)
        }
    }
    const handleClickNo = () => {
        if(question?.no) {
            setQuestion(question?.no)
        }
    }
    const handleClickReset = () => {
        setQuestion(questions)
    }
    return      (
        <Card title={question.data.question} className="p-4 bg-white shadow-md rounded-md">
            <div className="mb-4">
                {question.no || question.yes ? (
                    <>
                        <div className="flex gap-4">
                            <Button
                                theme="outlined"
                                size="medium"
                                onClick={handleClickYes}
                                className="flex-1"
                            >
                                ДА
                            </Button>
                            <Button
                                theme="outlined"
                                size="medium"
                                onClick={handleClickNo}
                                className="flex-1"
                            >
                                НЕТ
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="text-lg">
                        <p> {question.data.result}</p>
                        <Button
                            theme="outlined"
                            size="medium"
                            onClick={handleClickReset}
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                            Начать заново
                        </Button>
                    </div>
                )}
            </div>
        </Card>
    )
};

