export default function qualityIndicator(value: number) {
  switch (true) {
    case value < 50:
      return { color: '#43976ae3', comment: 'Good', emoji: '✅' };
    case value < 100:
      return { color: '#fadf59e7', comment: 'Moderate', emoji: '💨' };
    case value < 150:
      return { color: '#f19e4be0', comment: 'Quite unhealthy', emoji: '⚠️' };
    case value < 200:
      return { color: '#bb2738e7', comment: 'Unhealthy', emoji: '👎🏽' };
    case value < 300:
      return { color: '#5e0e93e2', comment: 'Very unhealthy', emoji: '🙅🏻' };
    default:
      return { color: '#731425e6', comment: 'Dangerous!', emoji: '💀' };
  }
}
