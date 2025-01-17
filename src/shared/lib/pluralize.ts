/**
 * Plural forms for russian words
 * @param  {Number} count quantity for word
 * @param  {Array} words Array of words. Example: ['депутат', 'депутата', 'депутатов'], ['коментарий', 'коментария', 'комментариев']
 * @return {String} plural form for word
 */
export function pluralize(count: number, words: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];

  return words[
    count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
  ];
}
