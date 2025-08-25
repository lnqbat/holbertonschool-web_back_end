export default function updateUniqueItems(itemMap) {
  if (!(itemMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const entry of itemMap) {
    const key = entry[0];
    const value = entry[1];

    if (value === 1) {
      itemMap.set(key, 100);
    }
  }

  return itemMap;
}
