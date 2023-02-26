let qualityColor = '';

const qualityIconColor = (value) => {
  switch (true) {
    case value < 50:
      qualityColor = '#43976A';
      break;
    case value < 100:
      qualityColor = '#FADF59';
      break;
    case value < 150:
      qualityColor = '#F19E4B';
      break;
    case value < 200:
      qualityColor = '#BB2739';
      break;
    case value < 300:
      qualityColor = '#5D0E93';
      break;
    default:
      qualityColor = '#731425';
      break;
  }
};
