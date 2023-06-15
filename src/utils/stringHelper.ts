function truncateStringInBetween(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }

  const ellipsisLength = 3; // Length of the ellipsis
  const midpoint = Math.floor(maxLength / 2);
  const leftHalf = str.substring(0, midpoint - Math.floor(ellipsisLength / 2));
  const rightHalf = str.substring(
    str.length - midpoint + Math.ceil(ellipsisLength / 2)
  );

  return leftHalf + '...' + rightHalf;
}

export { truncateStringInBetween };
