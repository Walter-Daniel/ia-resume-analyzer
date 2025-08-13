// Converts a number of bytes into a human-readable string (KB, MB, GB, etc.)
export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let i = -1;
  let size = bytes;
  do {
    size = size / 1024;
    i++;
  } while (size >= 1024 && i < units.length - 1);
  return `${size.toFixed(2)} ${units[i]}`;
}
