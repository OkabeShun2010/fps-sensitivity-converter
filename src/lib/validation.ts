import type { Game } from "../types/game";
import type {
  ParsedSensitivityInput,
  SensitivityInput,
  ValidationErrors,
} from "../types/sensitivity";

export type ValidationResult = {
  parsedInput: ParsedSensitivityInput | null;
  errors: ValidationErrors;
};

export function validateSensitivityInput(
  input: SensitivityInput,
  games: Game[],
): ValidationResult {
  const errors: ValidationErrors = {};
  const fromGame = games.find((game) => game.id === input.fromGameId);
  const toGame = games.find((game) => game.id === input.toGameId);
  const sensitivity = Number(input.sensitivity);
  const dpi = Number(input.dpi);

  if (!fromGame) {
    errors.fromGameId = "変換元ゲームを選択してください。";
  }

  if (!toGame) {
    errors.toGameId = "変換先ゲームを選択してください。";
  }

  if (input.sensitivity.trim() === "") {
    errors.sensitivity = "感度を入力してください。";
  } else if (!Number.isFinite(sensitivity)) {
    errors.sensitivity = "感度は数値で入力してください。";
  } else if (sensitivity <= 0) {
    errors.sensitivity = "感度は0より大きい数値で入力してください。";
  }

  if (input.dpi.trim() === "") {
    errors.dpi = "DPIを入力してください。";
  } else if (!Number.isFinite(dpi)) {
    errors.dpi = "DPIは数値で入力してください。";
  } else if (dpi <= 0) {
    errors.dpi = "DPIは0より大きい数値で入力してください。";
  }

  if (Object.keys(errors).length > 0 || !fromGame || !toGame) {
    return {
      parsedInput: null,
      errors,
    };
  }

  return {
    parsedInput: {
      fromGame,
      toGame,
      sensitivity,
      dpi,
    },
    errors,
  };
}
