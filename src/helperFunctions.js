export function capitalize(name) {
  const words = name.split(" ");
  return words
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}
