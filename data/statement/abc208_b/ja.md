配点 : $200$ 点

## 問題文

高橋王国では $1!$ 円硬貨 $, 2!$ 円硬貨 $, \dots, 10!$ 円硬貨が流通しています。ここで、$N! = 1 \times 2 \times \dots \times N$ です。

高橋君は全ての種類の硬貨を $100$ 枚ずつ持っており、$P$ 円の商品を**お釣りが出ないようにちょうどの金額を支払って**買おうとしています。

問題の制約下で条件を満たす支払い方は必ず存在することが証明できます。

最小で何枚の硬貨を使えば支払うことができますか？

## 制約

- $1 \leq P \leq 10^7$
- $P$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $P$

## 出力

必要となる硬貨の最小枚数を出力せよ。

```input1
9
```

```output1
3
```

$1! = 1$ 円硬貨、$2! = 2$ 円硬貨、$3! = 6$ 円硬貨を $1$ 枚ずつ使うと $3$ 枚の硬貨で $9$ 円の商品をちょうどの金額で支払うことができます。これより少ない枚数で支払う方法は存在しません。

```input2
119
```

```output2
10
```

$1!$ 円硬貨を $1$ 枚、$2!$ 円硬貨を $2$ 枚、$3!$ 円硬貨を $3$ 枚、$4!$ 円硬貨を $4$ 枚使えばよいです。

```input3
10000000
```

```output3
24
```