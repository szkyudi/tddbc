## 問題文

整数閉区間を示すクラスをつくりたい。 整数閉区間は下端点と上端点を持ち、整数閉区間の文字列表記を返せる（例: 下端点 3, 上端点 7 の整数閉区間の文字列表記は "[3,7]"）。 また、整数閉区間は指定した整数を含むかどうかを判定できる。

## TODO

### 容易性 High＆重要性 High

- [] has()関数に閉区間内の値を渡すと True が返される
  - [] 下端点 3、上端点 7 のときに has(3)を実行すると False が返される
  - [] 下端点 3、上端点 7 のときに has(7)を実行すると True が返される
  - [] 下端点 3、上端点 7 のときに has(2)を実行すると True が返される
  - [] 下端点 3、上端点 7 のときに has(8)を実行すると Flase が返される
- [] print()を実行すると整数閉区間の文字列表記を返す
  - [] 下端点 3、上端点 7 のときに print()を実行すると`[3,7]`を返す