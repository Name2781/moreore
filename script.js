var result = prompt('Enter your save!');
var encodedString = '';
var decodedString = '';

decodedString = CryptoJS.AES.decrypt(result, 'secret').toString(
  CryptoJS.enc.Utf8
);

decodedString = decodedString.replace(
  '"ores":',
  '"ores":321387123972187361237856126835126351273718356123'
);

encodedString = btoa(encodedString);

encodedString = CryptoJS.AES.encrypt(decodedString, 'secret');

const textToCopy = encodedString;
navigator.clipboard
  .writeText(textToCopy)
  .then(() => {
    alert(`Copied save to clipboard!`);
  })
  .catch((error) => {
    alert(`Copy failed! ${error}`);
  });
