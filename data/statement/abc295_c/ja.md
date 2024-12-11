配点 : $300$ 点

## 問題文

$N$ 枚の靴下があります。$i$ 枚目の靴下の色は $A_i$ です。

あなたは以下の操作をできるだけ多い回数行いたいです。最大で何回行うことができますか？

- まだペアになっていない靴下の中から同じ色の靴下を $2$ 枚選んでペアにする。

## 制約

- $1\leq N \leq 5\times 10^5$
- $1\leq A_i \leq 10^9$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

答えを整数として出力せよ。

```input1
6
4 1 7 4 1 4
```

```output1
2
```

以下のようにして、$2$ 回の操作を行うことができます。

- 色が $1$ である靴下を $2$ 枚選んでペアにする。
- 色が $4$ である靴下を $2$ 枚選んでペアにする。

このとき、色が $4$ である靴下と $7$ である靴下が $1$ 枚ずつ残るため、これ以上操作はできません。
また、どのように操作をしても $3$ 回以上操作を行うことはできないため、$2$ を出力します。

```input2
1
158260522
```

```output2
0
```

```input3
10
295 2 29 295 29 2 29 295 2 29
```

```output3
4
```