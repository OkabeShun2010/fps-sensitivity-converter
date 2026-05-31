import type {
  ParsedSensitivityInput,
  SensitivityResult,
} from "../types/sensitivity";

export function calculateCmPer180(
  dpi: number,
  sensitivity: number,
  yaw: number,
): number {
  return (180 / (dpi * sensitivity * yaw)) * 2.54;
}

export function convertSensitivity(
  sensitivity: number,
  fromYaw: number,
  toYaw: number,
): number {
  return (sensitivity * fromYaw) / toYaw;
}

export function calculateEdpi(dpi: number, sensitivity: number): number {
  return dpi * sensitivity;
}

export function calculateSensitivityResult(
  input: ParsedSensitivityInput,
): SensitivityResult {
  const convertedSensitivity = convertSensitivity(
    input.sensitivity,
    input.fromGame.yaw,
    input.toGame.yaw,
  );

  return {
    convertedSensitivity,
    fromEdpi: calculateEdpi(input.dpi, input.sensitivity),
    toEdpi: calculateEdpi(input.dpi, convertedSensitivity),
    cmPer180: calculateCmPer180(
      input.dpi,
      input.sensitivity,
      input.fromGame.yaw,
    ),
    description: `${input.fromGame.name} の感度 ${input.sensitivity} を ${input.toGame.name} に変換します。`,
  };
}
