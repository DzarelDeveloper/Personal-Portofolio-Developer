import type { LocalizedText } from "../types/portfolio";

export interface RecognitionEvidence {
  readonly src: string;
  readonly alt: LocalizedText;
  readonly manualReview?: boolean;
}

export interface RecognitionRecord {
  readonly id: string;
  readonly title: LocalizedText;
  readonly issuer: LocalizedText;
  readonly date: LocalizedText | null;
  readonly detail: LocalizedText;
  readonly images: readonly RecognitionEvidence[];
}

export function recognitionImage(
  filename: string,
  alt: LocalizedText,
): RecognitionEvidence {
  return {
    src: `/assets/recognition/${filename}`,
    alt,
  };
}
