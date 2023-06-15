function brokenKeys(correctPhrase, typedPhrase) {
    let brokenKeys = [];
    for (let i = 0; i < correctPhrase.length; i++) {
      if (correctPhrase[i] !== typedPhrase[i]) {
        if (!brokenKeys.includes(correctPhrase[i])) {
          brokenKeys.push(correctPhrase[i]);
        }
      }
    }
    return brokenKeys;
  }
  console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")); // Output: ["a", "t"]
  console.log(brokenKeys("good night", "gppd night")); // Output: ["o"]
  console.log(brokenKeys("Ismail Hussein", "Ismadl Hussein")); // Output: ["i"]