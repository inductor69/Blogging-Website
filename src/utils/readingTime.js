export function formatReadingTime(words, wpm = 150) {
  return `${Math.ceil(words / wpm)} min read`;
}
