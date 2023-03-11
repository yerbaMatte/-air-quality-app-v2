export default function convertTime(dist: number) {
  let days = 0;
  let hours = 0;
  let minutes = 0;

  if (dist >= 60) {
    hours = Math.floor(dist / 60);
    minutes = dist % 60;

    if (hours >= 24) {
      days = Math.floor(hours / 24);
      hours = hours % 24;
    }
  } else {
    minutes = dist;
  }

  let result = '';

  if (days === 1) {
    result += '1 day ';
  } else if (days > 1) {
    result += `${days} days `;
  }

  if (hours === 1) {
    result += '1 hour ';
  } else if (hours > 1) {
    result += `${hours} hours `;
  }

  if (minutes === 1) {
    result += '1 minute';
  } else if (minutes > 1) {
    result += `${minutes} minutes`;
  }

  if (days === 0 && hours === 0 && minutes === 0) {
    result += 'just now';
  } else {
    result += ' ago';
  }

  return result.trim();
}
