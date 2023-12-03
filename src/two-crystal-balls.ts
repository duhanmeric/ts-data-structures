const twoCrystalBalls = (breaks: boolean[]) => {
  // atlama mesafesini bul
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  // array'deki ilk true'ya gelene kadar git, gelince break yapıp döngüden çık
  // burda ilk top kırılıyor, 2. topu da atarsak kırılacağı noktayı buluyoruz
  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // son kırılan yerden jmpAmount kadar geri sar
  i -= jmpAmount;

  // son topun kırılmadan atılacağı noktayı bulma
  // artık sadece son checkpoint'ten jmpAmount kadar ileri gidecek (çünkü bu aralıkta kırılmış olmalı)
  // eğer kırılan noktaya geldiysen index'i return et
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
};

const arr = Array(10).fill(false).concat(Array(10).fill(true));
const result = twoCrystalBalls(arr);
console.log(result);

// bigO = O(sqrl(N))
