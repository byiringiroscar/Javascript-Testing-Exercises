const StringInput = (StrWord) => {
    if (StrWord.length > 0 && StrWord.length < 10) {
        return true;
      }
      else{
        return "The test is Error!";
      }
};


module.exports = StringInput;