import { useMemo, useState } from "react";
import AppHeader from "./components/AppHeader";
import InfoPanel from "./components/InfoPanel";
import ResultCard from "./components/ResultCard";
import SensitivityForm from "./components/SensitivityForm";
import { games } from "./data/games";
import { calculateSensitivityResult } from "./lib/sensitivity";
import { validateSensitivityInput } from "./lib/validation";
import type { SensitivityInput } from "./types/sensitivity";

const initialInput: SensitivityInput = {
  fromGameId: "valorant",
  toGameId: "apex-legends",
  sensitivity: "",
  dpi: "",
};

function App() {
  const [input, setInput] = useState<SensitivityInput>(initialInput);

  const hasStartedInput =
    input.sensitivity.trim() !== "" || input.dpi.trim() !== "";

  const validation = useMemo(
    () => validateSensitivityInput(input, games),
    [input],
  );

  const result = useMemo(() => {
    if (!validation.parsedInput) {
      return null;
    }

    return calculateSensitivityResult(validation.parsedInput);
  }, [validation.parsedInput]);

  return (
    <main className="app">
      <AppHeader />
      <div className="converter-layout">
        <SensitivityForm
          games={games}
          values={input}
          errors={hasStartedInput ? validation.errors : {}}
          onChange={setInput}
        />
        <ResultCard result={result} />
      </div>
      <InfoPanel />
    </main>
  );
}

export default App;
