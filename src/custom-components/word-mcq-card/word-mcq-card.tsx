'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'

interface QuizItem {
  word: string
  pronunciation: string
  options: string[]
  correctAnswer: string
  examples: string[]
}

const quizData: QuizItem = {
  word: "నమస్కారం",
  pronunciation: "Namaskāraṁ",
  options: ["Hello", "Goodbye", "Thank you", "Sorry"],
  correctAnswer: "Hello",
  examples: [
    "నమస్కారం, మీరు ఎలా ఉన్నారు? (Namaskāraṁ, mīru elā unnāru?) - Hello, how are you?",
    "శుభ ఉదయం, నమస్కారం! (Śubha udayaṁ, namaskāraṁ!) - Good morning, hello!",
  ]
}

export default function WordMCQCard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showExamples, setShowExamples] = useState(false)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setShowExamples(true)
  }

  const isCorrect = selectedOption === quizData.correctAnswer

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-2xl mx-auto bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">{quizData.word}</CardTitle>
          <p className="text-xl text-center text-gray-400">{quizData.pronunciation}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {quizData.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionClick(option)}
                variant={selectedOption === option ? (isCorrect ? "default" : "destructive") : "outline"}
                className={`h-20 text-lg ${
                  selectedOption === null
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : selectedOption === option
                    ? isCorrect
                      ? 'bg-green-600 hover:bg-green-600 text-white'
                      : 'bg-red-600 hover:bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-400'
                }`}
                disabled={selectedOption !== null}
              >
                {option}
              </Button>
            ))}
          </div>

          {selectedOption && (
            <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-800' : 'bg-red-800'}`}>
              <div className="flex items-center space-x-2">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400" />
                )}
                <p className="text-lg font-semibold text-white">
                  {isCorrect
                    ? "Correct! Well done!"
                    : `Incorrect. The correct answer is "${quizData.correctAnswer}".`}
                </p>
              </div>
            </div>
          )}

          {showExamples && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-white">More examples:</h3>
              <ul className="list-disc list-inside space-y-2">
                {quizData.examples.map((example, index) => (
                  <li key={index} className="text-gray-300">{example}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}