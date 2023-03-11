export default function qualityIndicator(value: number) {
  switch (true) {
    case value < 50:
      return { color: '#43976A', comment: 'Good', emoji: '✅' };
    case value < 100:
      return { color: '#FADF59', comment: 'Moderate', emoji: '💨' };
    case value < 150:
      return { color: '#F19E4B', comment: 'Quite unhealthy', emoji: '⚠️' };
    case value < 200:
      return { color: '#BB2739', comment: 'Unhealthy', emoji: '👎🏽' };
    case value < 300:
      return { color: '#5D0E93', comment: 'Very unhealthy', emoji: '🙅🏻' };
    default:
      return { color: '#731425', comment: 'Dangerous!', emoji: '💀' };
  }
}
