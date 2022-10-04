import { describe, test, expect, beforeEach } from "vitest";
import { Range } from "../Range";

describe("整数閉区間を示すクラスのテスト", () => {
  describe("整数閉区間が下端点と上端点を持つこと", () => {
    test("3, 7を渡すと下端点「3」上端点「7」を持つこと", () => {
      const range = new Range(3, 7);
      expect(range.lowerPoint).toBe(3);
      expect(range.upperPoint).toBe(7);
    });
  });

  describe("整数閉区間の文字列表記を返す", () => {
    test("[3,7]の閉区間のときにprint()を実行すると文字列の\"[3,7]\"を返す", () => {
      const range = new Range(3, 7);
      expect(range.print()).toBe("[3,7]");
    })
    test("[-3,-7]の閉区間のときにprint()を実行すると文字列の\"[-7,-3]\"を返す", () => {
      const range = new Range(3, 7);
      expect(range.print()).toBe("[3,7]");
    })
  })
  
  describe("整数閉区間に任意の値が含まれているかどうか", () => {
    test.each([
      { lowerPoint: 3, upperPoint: 7, num:2, expected: false },
      { lowerPoint: 3, upperPoint: 7, num:3, expected: true },
      { lowerPoint: 3, upperPoint: 7, num:7, expected: true },
      { lowerPoint: 3, upperPoint: 7, num:8, expected: false },
    ])("下端点$lowerPoint、上端点$upperPointの整数閉区間のときhas()に$numを渡すと$expectedが返される", ({ lowerPoint, upperPoint, num, expected}) => {
        const range = new Range(lowerPoint, upperPoint);
        expect(range.has(num)).toBe(expected);
    });
  });


  describe("想定していないクラスの使い方をされたときの動作", () => {
    describe("コンストラクタに意図しない変数が渡されたとき", () => {
      test("7, 3を渡すと下端点「3」上端点「7」を持つこと", () => {
        const range = new Range(7, 3);
        expect(range.lowerPoint).toBe(3);
        expect(range.upperPoint).toBe(7);
      });
    });
  })
})