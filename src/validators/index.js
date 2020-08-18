export function phone(value) {
  var phoneReg = /^\+7(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  return phoneReg.test(value);
}
