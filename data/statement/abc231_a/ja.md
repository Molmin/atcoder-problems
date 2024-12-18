配点 : $100$ 点

## 問題文

水圧は水深のみに依存し、水深 $x$ [m] の場所では $\dfrac{x}{100}$ [MPa] になるものとします。

水深 $D$ [m] の場所の水圧は何 [MPa] ですか？

## 制約

- $1 \leq D \leq 10000$
- $D$ は整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $D$

## 出力

答えを出力せよ。想定解答との絶対誤差または相対誤差が $10^{-3}$ 以下であれば正解として扱われる。

```input1
1000
```

```output1
10
```

水深 $1000$ [m] の場所の水圧は $10$ [MPa] です。`10.0` や `9.999999` などを出力しても正解となります。

```input2
50
```

```output2
0.5
```

```input3
3141
```

```output3
31.41
```