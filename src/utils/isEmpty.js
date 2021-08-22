export function isEmpty(field) {
  switch (field) {
    case '':
    case null:
    case false:
    case typeof (e) === 'undefined':
      return true;
    default:
      return false;
  }
}
