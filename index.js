var count = 0;

binaryZero = () => {
  if (count != 8) {
    if (count < 8) {
      document.getElementById("binary").value =
        document.getElementById("binary").value + "0";

      count++;
    }
  }
  hendleConverte();
};
binaryOne = () => {
  if (count != 8) {
    if (count < 8) {
      document.getElementById("binary").value =
        document.getElementById("binary").value + "1";

      count++;
    }
  }
  hendleConverte();
};
handleClean = () => {
  window.location.reload();
};
hendleConverte = () => {
  var bin = document.getElementById("binary").value;
  var dec = 0;

  for (var i = 0; i < bin.length; i++)
    dec += Math.pow(2, i) * bin[bin.length - i - 1];

  document.getElementById("decimal").value = dec;
};

handleKeyPress = () => {
  var test = event.charCode;
  if (test != 49 && test != 48) {
    alert("only binary numbers are allowed");
    handleClean();
  }
  hendleConverte();
};
