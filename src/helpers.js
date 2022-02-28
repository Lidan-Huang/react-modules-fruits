
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  const itemIdx = items.indexOf(item);
  return (itemIdx === -1)
    ? undefined
    : items.splice(itemIdx, 1);
}

export { choice, remove };