"use client";

import { motion } from "motion/react";
import { Card, Tag, Divider, Button } from "antd";
import { usePDF } from "react-to-pdf";

import {
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ClipboardList,
} from "lucide-react";
import PrintableDentalReport from "./printableDentalReport";

type AIResult = {
  riskLevel: string;
  possibleIssue: string;
  recommendations: string[];
  explanation: string;
};

export default function AIResultCard({ data }: { data: AIResult }) {
  //const date = new Date().now();
  const { toPDF, targetRef } = usePDF({
    filename: `ai_dental_report.pdf`,
  });
  const getRiskConfig = (risk: string) => {
    const lower = risk.toLowerCase();

    if (lower.includes("high")) {
      return {
        color: "red",
        bg: "from-red-500 to-rose-500",
        border: "border-red-200",
        icon: <AlertTriangle size={20} />,
      };
    }

    if (lower.includes("medium")) {
      return {
        color: "orange",
        bg: "from-orange-400 to-amber-500",
        border: "border-orange-200",
        icon: <ShieldCheck size={20} />,
      };
    }

    return {
      color: "green",
      bg: "from-emerald-400 to-green-500",
      border: "border-emerald-200",
      icon: <ShieldCheck size={20} />,
    };
  };

  const riskConfig = getRiskConfig(data.riskLevel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-14">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl"
      >
        <Card
          className={`overflow-hidden rounded-[2rem] border-0 bg-white/95 shadow-[0_35px_120px_rgba(15,23,42,0.45)]`}
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          {/* Top Header */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_40%)]" />

            <div
              className={`bg-gradient-to-r ${riskConfig.bg} px-10 py-12 text-white`}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles size={20} />
                    <span className="text-sm uppercase tracking-[0.3em] text-white/80">
                      AI Dental Analysis
                    </span>
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Your Dental Health Report
                  </h1>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                    Our AI analyzed your questionnaire and generated a
                    personalized dental wellness summary based on your symptoms.
                  </p>
                </div>

                {/* Risk Card */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 text-white">
                    {riskConfig.icon}

                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                        Risk Level
                      </p>

                      <Tag
                        color={riskConfig.color}
                        className="mt-2 rounded-full px-5 py-1 text-base font-semibold"
                      >
                        {data.riskLevel}
                      </Tag>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
            {/* Possible Issue */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className={`rounded-[1.75rem] border ${riskConfig.border} bg-slate-50 p-7`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                  <Stethoscope size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Possible Issue
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Dental Observation
                  </h2>
                </div>
              </div>

              <p className="text-lg leading-8 text-slate-700">
                {data.possibleIssue}
              </p>
            </motion.div>

            {/* Explanation */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                  <ClipboardList size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    AI Explanation
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900">
                    Detailed Insights
                  </h2>
                </div>
              </div>

              <p className="leading-8 text-slate-700">{data.explanation}</p>
            </motion.div>
          </div>

          {/* Recommendations */}
          <div className="px-8 pb-10 md:px-10">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Recommended Actions
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Personalized Recommendations
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {data.recommendations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex  items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                      {i + 1}
                    </div>

                    <p className="text-slate-700 leading-7">{item}</p>
                  </motion.div>
                ))}
              </div>

              <Divider />

              {/* AI Disclaimer */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 text-amber-600" size={22} />

                  <div>
                    <h3 className="font-semibold text-amber-900">
                      Important Note
                    </h3>

                    <p className="mt-1 leading-7 text-amber-800">
                      This analysis is AI-generated and intended only for
                      informational purposes. It should not be considered a
                      medical diagnosis or prescription. Please consult a
                      qualified dentist or healthcare professional for proper
                      medical advice.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-4 justify-end">
                <Button type="primary" size="large" className="btn_cls" onClick={() => toPDF()}>
                  Download PDF
                </Button>
                <Button type="primary" size="large" className="btn_cls">
                  Book Dental Consultation
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
      <div  style={{
    position: "fixed",
    left: "-10000px",
    top: 0,
    zIndex: -1,
  }}>
        <div ref={targetRef}>
          <PrintableDentalReport data={data} />
        </div>
      </div>
    </div>
  );
}
