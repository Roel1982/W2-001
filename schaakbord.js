var hashtag = "#";
var spatie = ' ';
var grootte = 8;

for (var x = 1; x <= grootte; x++) {
  var regel = ' ';

  for (var y = 1; y <= grootte; y++) {
    if (x % 2) {
      if (y % 2) {
        regel = regel + spatie;
      } else {
        regel = regel + hashtag;
      }
    } else {
      if (y % 2) {
        regel = regel + hashtag;
      } else {
        regel = regel + spatie;
      }
    }

  }

  console.log(regel);
}
