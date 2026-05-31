import type { Game } from "./game";

export type SensitivityInput = {
  fromGameId: string;
  toGameId: string;
  sensitivity: string;
  dpi: string;
};

export type ParsedSensitivityInput = {
  fromGame: Game;
  toGame: Game;
  sensitivity: number;
  dpi: number;
};

export type SensitivityResult = {
  convertedSensitivity: number;
  fromEdpi: number;
  toEdpi: number;
  cmPer180: number;
  description: string;
};

export type ValidationErrors = {
  sensitivity?: string;
  dpi?: string;
  fromGameId?: string;
  toGameId?: string;
};
