配点 : $1000$ 点

## 問題文

{${1, ... ,n}$} からなる無限長の列 $a_1, a_2, ...$ のうち、
次の条件を満たしているものは何通りあるでしょうか？

- 第 $n$ 項から先はすべて同じ数である。つまり、$n \leq i,j$ ならば $a_i = a_j$ を満たす。
- どの正の整数 $i$ に対しても、第 $i$ 項の直後に並ぶ $a_i$ 個の項はすべて同じ数である。つまり、 $i &lt; j &lt; k\leq i+a_i$ ならば $a_j = a_k$ を満たす。

答えを $10^9+7$ で割ったあまりを求めてください。

## 制約

- $1 \leq n \leq 10^6$
- $n$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $n$

## 出力

条件を満たす数列の数を $10^9+7$ で割ったあまりを出力せよ。

```input1
2
```

```output1
4
```

以下の $4$ 通りがあります。

- $1, 1, 1, ...$
- $1, 2, 2, ...$
- $2, 1, 1, ...$
- $2, 2, 2, ...$

```input2
654321
```

```output2
968545283
```