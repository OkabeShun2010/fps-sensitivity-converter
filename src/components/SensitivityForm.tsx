import type { Game } from "../types/game";
import type {
  SensitivityInput,
  ValidationErrors,
} from "../types/sensitivity";

type SensitivityFormProps = {
  games: Game[];
  values: SensitivityInput;
  errors: ValidationErrors;
  onChange: (values: SensitivityInput) => void;
};

function SensitivityForm({
  games,
  values,
  errors,
  onChange,
}: SensitivityFormProps) {
  const updateValue = (key: keyof SensitivityInput, value: string) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  return (
    <section className="card" aria-labelledby="form-title">
      <div className="card-header">
        <p className="section-label">Input</p>
        <h2 id="form-title">感度を入力</h2>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>変換元ゲーム</span>
          <select
            value={values.fromGameId}
            onChange={(event) => updateValue("fromGameId", event.target.value)}
          >
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
          {errors.fromGameId && <small>{errors.fromGameId}</small>}
        </label>

        <label className="field">
          <span>変換先ゲーム</span>
          <select
            value={values.toGameId}
            onChange={(event) => updateValue("toGameId", event.target.value)}
          >
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
          {errors.toGameId && <small>{errors.toGameId}</small>}
        </label>

        <label className="field">
          <span>ゲーム内感度</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.001"
            placeholder="例: 0.35"
            value={values.sensitivity}
            onChange={(event) => updateValue("sensitivity", event.target.value)}
          />
          {errors.sensitivity && <small>{errors.sensitivity}</small>}
        </label>

        <label className="field">
          <span>DPI</span>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            step="1"
            placeholder="例: 800"
            value={values.dpi}
            onChange={(event) => updateValue("dpi", event.target.value)}
          />
          {errors.dpi && <small>{errors.dpi}</small>}
        </label>
      </div>
    </section>
  );
}

export default SensitivityForm;
