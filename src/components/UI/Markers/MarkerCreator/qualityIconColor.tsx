export default function qualityIconColor(value: number) {
  switch (true) {
    case value < 50:
      return '#43976A';
    case value < 100:
      return '#FADF59';
    case value < 150:
      return '#F19E4B';
    case value < 200:
      return '#BB2739';
    case value < 300:
      return '#5D0E93';
    default:
      return '#731425';
  }
}
