/**
 * Sanitizes a given text by replacing special characters, stripping non-ASCII
 * characters, and uppercasing accented vowels.
 * @param {string} text - The text to sanitize.
 * @returns {string} The sanitized text.
 */
export function formatText(text: string): string {
  return text
    .replace(/[\n\r\t\f\v\uFEFF\u200B]/g, " ")
    .replace(/[^\x20-\x7E\u00C0-\u017F]/g, "")
    .replace(/([áéíóúÁÉÍÓÚ])/g, function (m) {
      return m.toUpperCase();
    });
}
