配点 : $200$ 点

## 問題文

$N$ 本の木があり、 $i$ 番目の木には $A_i$ 個の木の実が実っています。

シマリスは、次のルールで全ての木から木の実を収穫します。

- 実っている木の実が $10$ 個以下の木からは木の実を収穫しない
- 実っている木の実が $10$ 個より多い木からは、$10$ 個を残して残りの全てを収穫する

シマリスが収穫する木の実の個数の合計を求めてください。

## 制約

- $1 \leq N \leq 1000$
- $0 \leq A_i \leq 1000$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## 出力

答えを出力せよ。  

```input1
3
6 17 28
```

```output1
25
```

$3$ 本の木からそれぞれ $0,7,18$ 個の木の実を収穫します。よって合計は $25$ 個です。

```input2
4
8 9 10 11
```

```output2
1
```