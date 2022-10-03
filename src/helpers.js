/**Choose a random item from given array of items. */
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

/**Remove the first matching item from items, if it exists, and
 * returns it. Otherwise returns undefined.
 */
function remove(items, item) {
  const itemIdx = items.indexOf(item);
  return (itemIdx === -1)
    ? undefined
    : items.splice(itemIdx, 1);
}

export { choice, remove };