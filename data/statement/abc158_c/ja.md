配点 : $300$ 点

## 問題文

消費税率が $8$ %のとき $A$ 円、$10$ ％のとき $B$ 円の消費税が課されるような商品の税抜き価格を求めてください。

ただし、税抜き価格は正の整数でなければならないものとし、消費税の計算において小数点以下は切り捨てて計算するものとします。

条件を満たす税抜き価格が複数存在する場合は最も小さい金額を出力してください。また、条件を満たす税抜き価格が存在しない場合は `-1` と出力してください。

## 制約

- $1 \leq A \leq B \leq 100$
- $A, B$ は整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$

## 出力

条件を満たす税抜き価格が存在する場合は最小の金額を表す整数を、存在しない場合は `-1` を出力せよ。

```input1
2 2
```

```output1
25
```

税抜き価格が $25$ 円の場合、

- <p>消費税率が $8$ %のとき消費税は $\lfloor 25 \times 0.08 \rfloor = \lfloor 2 \rfloor = 2$ 円です。</p>
- <p>消費税率が $10$ %のとき消費税は $\lfloor 25 \times 0.1 \rfloor = \lfloor 2.5 \rfloor = 2$ 円です。</p>

よって $25$ 円は条件を満たし、また $26$ 円のときなども条件を満たしますが、これが最小であるので $25$ を出力してください。

```input2
8 10
```

```output2
100
```

税抜き価格が $100$ 円の場合、

- <p>消費税率が $8$ %のとき消費税は $\lfloor 100 \times 0.08 \rfloor = 8$ 円です。</p>
- <p>消費税率が $10$ %のとき消費税は $\lfloor 100 \times 0.1 \rfloor = 10$ 円です。</p>

```input3
19 99
```

```output3
-1
```

条件を満たす税抜き価格は存在しないので、`-1` を出力してください。