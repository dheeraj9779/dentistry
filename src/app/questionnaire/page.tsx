"use client";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/mock_data/data";
import { Button, Card, App } from "antd";
import { motion } from "motion/react";
import { useMemo, useState } from "react";



export default function QuestionnairePage() {
  const { message } = App.useApp();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion.id] || "";

  const progress = useMemo(
    () => Math.round(((currentQuestionIndex + 1) / questions.length) * 100),
    [currentQuestionIndex]
  );

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const goNext = () => {
    if (!selectedAnswer) {
      message.warning("Please choose an answer to continue.");
      return;
    }
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const goPrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      message.warning("Please choose an answer before submitting.");
      return;
    }
    message.success("Your questionnaire was submitted successfully.");
    
    console.log("questionnaire answers", answers);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-slate-950 via-slate-800/85 to-slate-700/40 py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <motion.div className="overflow-hidden rounded-4xl border border-slate-200 bg-white/95 shadow-[0_32px_120px_rgba(15,23,42,0.16)]"
        initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
        >
          <div className="bg-linear-to-r from-cyan-600 via-sky-500 to-blue-500 px-8 py-10 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-100">Premium dental intake</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight">Dental Wellness Questionnaire</h1>
            <p className="mt-4 max-w-2xl text-slate-100 text-lg leading-8">
              Answer a few simple questions and get an instant AI-powered
                  dental recommendation tailored to your symptoms.
            </p>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-slate-50 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Question {currentQuestionIndex + 1} of {questions.length}</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900">{currentQuestion.question}</h2>
              </div>
              <div className="w-full max-w-md">
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-linear-to-r from-cyan-500 to-sky-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>

            <Card className="rounded-[1.75rem] border border-slate-200 bg-white! shadow-[0_20px_80px_rgba(15,23,42,0.08)]" bodyStyle={{ padding: 0 }}>
              <div className="rounded-[1.75rem] bg-white p-6 md:p-8">
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  onAnswerChange={handleAnswerChange}
                />
              </div>
            </Card>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-slate-600">
                Selected answer: <span className="font-semibold text-slate-900">{selectedAnswer || "None selected"}</span>
              </div>
              <div className="flex flex-wrap justify-end gap-3">
                {currentQuestionIndex > 0 && (
                  <Button
                  size='large'
                    onClick={goPrevious}
                    className="rounded-full border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-800 shadow-sm"
                  >
                    Previous
                  </Button>
                )}
                {currentQuestionIndex < questions.length - 1 ? (
                  <Button type="primary" size='large'  onClick={goNext} className="btn_cls">
                    Continue
                  </Button>
                ) : (
                  <Button type="primary" size='large' onClick={handleSubmit} className="btn_cls">
                    Submit Answers
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
