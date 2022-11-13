const random = (maxNumber: number) => {
  while (true) {
    let random_num = new Uint8Array(1); // 2048 = number length in bits
    window.crypto.getRandomValues(random_num);

    if (random_num[0] > maxNumber) {
      continue;
    }
    return random_num[0];
  }
};

export default random;
