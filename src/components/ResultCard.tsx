import type { SensitivityResult } from "../types/sensitivity";

type ResultCardProps = {
  result: SensitivityResult | null;
};

function ResultCard({ result }: ResultCardProps) {
  if (!result) {
    return (
      <section className="card result-card" aria-labelledby="result-title">
        <div className="card-header">
          <p className="section-label">Result</p>
          <h2 id="result-title">変換結果</h2>
        </div>
        <p className="empty-result">感度とDPIを入力すると、変換結果が表示されます。</p>
      </section>
    );
  }

  return (
    <section className="card result-card" aria-labelledby="result-title">
      <div className="card-header">
        <p className="section-label">Result</p>
        <h2 id="result-title">変換結果</h2>
      </div>

      <div className="primary-result">
        <span>変換後感度</span>
        <strong>{result.convertedSensitivity.toFixed(4)}</strong>
      </div>

      <dl className="result-list">
        <div>
          <dt>変換元eDPI</dt>
          <dd>{result.fromEdpi.toFixed(2)}</dd>
        </div>
        <div>
          <dt>変換先eDPI</dt>
          <dd>{result.toEdpi.toFixed(2)}</dd>
        </div>
        <div>
          <dt>cm/180</dt>
          <dd>{result.cmPer180.toFixed(2)} cm</dd>
        </div>
      </dl>

      <p className="result-description">{result.description}</p>
    </section>
  );
}

export default ResultCard;
