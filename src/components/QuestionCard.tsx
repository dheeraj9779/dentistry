
import { Radio } from 'antd';

type Question = {
  id: string;
  question: string;
  options: string[];
};

type QuestionCardProps = {
  question: Question;
  selectedAnswer?: string;
  onAnswerChange: (value: string) => void;
};

const QuestionCard = ({ question, selectedAnswer, onAnswerChange }: QuestionCardProps) => {
  return (
    <div className="rounded-4xl border border-slate-200 bg-slate-50/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-6">
        <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
          Dental Survey
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">
          {question.question}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Choose the option that best describes how you&apos;re feeling today.
        </p>
      </div>

      <Radio.Group
        value={selectedAnswer}
        onChange={(event) => onAnswerChange(event.target.value)}
        className="grid!  md:grid-flow-col gap-4"
      >
        {question.options.map((option) => {
          const isActive = selectedAnswer === option;
          return (
            <Radio.Button
              key={option}
              value={option}
              className={`flex!  items-center! justify-center! rounded-3xl! border px-5!  py-4 text-base font-medium shadow-sm transition-all duration-200 ${
                isActive
                  ? 'border-cyan-600! bg-cyan-600! text-white! shadow-xl!'
                  : 'border-slate-200! bg-white! text-slate-800! hover:border-cyan-300 hover:bg-cyan-50!'
              }`}
            >
              {option}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
};

export default QuestionCard