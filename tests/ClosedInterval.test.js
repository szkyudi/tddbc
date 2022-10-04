import { describe, test, expect, beforeEach } from "vitest";
import { ClosedInterval } from "../ClosedInterval";

describe("整数閉区間を示す ClosedInterval クラスのテスト", () => {
  describe("2つの整数を渡してインスタンス化すると下端点と上端点が設定されること", () => {
    test.each([
      {
        description: "大きい数、小さい数の順で引数に渡すと下端点が小さい数、上端点が大きい数として設定されること",
        argument: [3, 7],
        expected: {
          lowerPoint: 3,
          upperPoint: 7
        }
      },
      {
        description: "小さい数、大きい数の順で引数に渡すと下端点が小さい数、上端点が大きい数として設定されること",
        argument: [7, 3],
        expected: {
          lowerPoint: 3,
          upperPoint: 7
        }
      },
      {
        description: "マイナスの値を渡すと下端点と上端点が設定されること",
        argument: [-7, -3],
        expected: {
          lowerPoint: -7,
          upperPoint: -3
        }
      },
      {
        description: "2つの引数が同じ値の場合、下端点と上端点がどちらも同じ値で設定されること",
        argument: [3, 3],
        expected: {
          lowerPoint: 3,
          upperPoint: 3
        }
      },
    ])("$description", ({ argument, expected }) => {
      const ci = new ClosedInterval(...argument);
      expect(ci.lowerPoint).toBe(expected.lowerPoint);
      expect(ci.upperPoint).toBe(expected.upperPoint);
    });
  });

  describe("toString()メソッドを実行すると[下端点,上端点]の形式で整数閉区間の文字列表記を返すこと", () => {
    test.each([
      { description: "正の数のときには符号を付けずに表記すること", lowerPoint: -3, upperPoint: 7, expected: "[-3,7]" },
      { description: "負の数のときには符号を付けて表記すること", lowerPoint: -3, upperPoint: 7, expected: "[-3,7]" },
      { description: "0ときには符号を付けずに表記すること", lowerPoint: 0, upperPoint: 7, expected: "[0,7]" },
      { description: "下端点と上端点の間は「,」で区切り、空白は含まれないこと", lowerPoint: 3, upperPoint: 7, expected: "[3,7]" },
    ])("$description", ({ lowerPoint, upperPoint, expected }) => {
      const ci = new ClosedInterval(lowerPoint, upperPoint);
      expect(ci.toString()).toBe(expected);
    });
  });
  
  describe("include()メソッドに任意の値を引数として渡して実行するとその引数が整数閉区間に含まれているかどうかを真偽値で返すこと", () => {
    const lowerPoint = 3;
    const upperPoint = 7;
    test.each([
      { description: "下限の境界値よりひとつ小さい整数", num: lowerPoint - 1, expected: false },
      { description: "下限の境界値と同じ整数", num: lowerPoint, expected: true },
      { description: "上限の境界値と同じ整数", num: upperPoint, expected: true },
      { description: "上限の境界値よりひとつ大きい整数", num: upperPoint + 1, expected: false },
    ])("$descriptionを渡すと$expectedが返されること", ({ num, expected }) => {
        const ci = new ClosedInterval(lowerPoint, upperPoint);
        expect(ci.include(num)).toBe(expected);
    });
    test("小数を渡した場合でも整数と同様に動作すること", () => {
      const ci = new ClosedInterval(3, 7);
      expect(ci.include(3.7)).toBe(true);
    })
  });
})