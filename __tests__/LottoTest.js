const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호에 숫자가아는 문자가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "ㄱ"]);
    }).toThrow("[ERROR] : 숫자만 입력 가능합니다.");
  });
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] : 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] : 중복된 숫자가 있습니다.");
  });
  test("로또 번호는 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 47, 6, 5]);
    }).toThrow("[ERROR] : 1~45 사이의 숫자만 입력 가능합니다.");
  });

  // 아래에 추가 테스트 작성 가능
});
