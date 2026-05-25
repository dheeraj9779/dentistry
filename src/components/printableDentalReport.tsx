"use client";

type PrintableDentalReportProps = {
  data: {
    riskLevel: string;
    possibleIssue: string;
    recommendations: string[];
    explanation: string;
  };
};

export default function PrintableDentalReport({
  data,
}: PrintableDentalReportProps) {
  const riskStyles = () => {
    const risk = data.riskLevel.toLowerCase();

    if (risk.includes("high")) {
      return {
        bg: "#fee2e2",
        text: "#b91c1c",
      };
    }

    if (risk.includes("medium")) {
      return {
        bg: "#ffedd5",
        text: "#c2410c",
      };
    }

    return {
      bg: "#dcfce7",
      text: "#15803d",
    };
  };

  const risk = riskStyles();

  return (
    <div
      className="bg-white text-black"
      style={{
        width: "900px",
        background: "white",
        color: "black",
        padding: "22px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "18px",
          marginBottom: "24px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              color: "#0f172a",
              margin: 0,
            }}
          >
            Dental AI Analysis Report
          </h1>

          <p
            style={{
              margin: 0,
              marginTop: "8px",
              color: "#64748b",
              fontSize: "15px",
            }}
          >
            AI-generated dental wellness summary
          </p>
        </div>

        {/* Risk Badge */}
        <div
          style={{
            padding: "10px 20px",
            borderRadius: "999px",
            background: risk.bg,
            color: risk.text,
            fontWeight: "bold",
            fontSize: "15px",
            height: "fit-content",
          }}
        >
          {data.riskLevel} Risk
        </div>
      </div>

      {/* Possible Issue */}
      <section
        style={{
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "12px",
            color: "#0f172a",
          }}
        >
          Possible Issue
        </h2>

        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "16px",
            background: "#f8fafc",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#334155",
              fontSize: "15px",
              lineHeight: "24px",
              fontWeight: "500",
            }}
          >
            {data.possibleIssue}
          </p>
        </div>
      </section>

      {/* Explanation */}
      <section
        style={{
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "12px",
            color: "#0f172a",
          }}
        >
          AI Explanation
        </h2>

        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "16px",
            background: "#ffffff",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#334155",
              fontSize: "15px",
              lineHeight: "24px",
            }}
          >
            {data.explanation}
          </p>
        </div>
      </section>

      {/* Recommendations */}
      <section
        style={{
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "14px",
            color: "#0f172a",
          }}
        >
          Recommendations
        </h2>

        <div>
          {data.recommendations.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "10px 14px",
                marginBottom: "9px",
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
                background: "#f8fafc",
              }}
            >
              <div
                style={{
                  minWidth: "26px",
                  height: "26px",
                  borderRadius: "999px",
                  background: "#06b6d4",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {index + 1}
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#334155",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div
        style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <h3
          style={{
            margin: 0,
            marginBottom: "8px",
            fontSize: "16px",
            color: "#92400e",
          }}
        >
          Important Disclaimer
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "13px",
            lineHeight: "24px",
            color: "#78350f",
          }}
        >
          This report is AI-generated and intended only for informational
          purposes. It should not be considered medical advice or diagnosis.
          Please consult a qualified dentist for proper medical evaluation.
        </p>
      </div>
    </div>
  );
}
