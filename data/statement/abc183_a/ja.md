配点 : $100$ 点

## 問題文

ReLU関数は以下のように定義されます。

![図](https://img.atcoder.jp/ghi/relu.png)

整数 $x$ が与えられるので $ReLU(x)$ を求めてください。

## 制約

- $x$ は整数
- $-10 \leq x \leq 10$

## 入力

入力は以下の形式で標準入力から与えられる。

> $x$

## 出力

答えを整数で出力せよ。

```input1
1
```

```output1
1
```

$1 \geq 0$ なので $ReLU(1) = 1$ です。

```input2
0
```

```output2
0
```

```input3
-1
```

```output3
0
```