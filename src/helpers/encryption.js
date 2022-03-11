import CryptoJS from "crypto-js";

function encrypt(o) {
  const t = CryptoJS.AES.encrypt(
    JSON.stringify({ o }),
    window.location.href
  ).toString();
  return t.toString(CryptoJS.enc.Utf8);
}

function decrypt(o) {
  return JSON.parse(
    CryptoJS.AES.decrypt(o, window.location.href).toString(CryptoJS.enc.Utf8)
  );
}
export { decrypt };
export { encrypt };
