配点 : $500$ 点

## 問題文

整数 $N$ が与えられます。以下の条件を満たす長さ $N$ の正の整数の列 $A_1,A_2,\ldots,A_N$ であって、数列に現れる値の最大値が最小になるものを一つ出力してください。

- $i$ が $j$ の約数ならば、$A_i \neq A_j$ $(1 \leq i &lt; j \leq N)$

## 制約

- $1 \leq N \leq 10^5$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

数列の各要素を空白で区切って一行に出力せよ。

条件を満たす解が複数存在する場合は、どれを出力してもよい。

> $A_1$ $A_2$ $\ldots$ $A_N$

```input1
4
```

```output1
1 2 2 3
```

この出力は以下の条件をすべて満たします。

- $A_1 \neq A_2$
- $A_1 \neq A_3$
- $A_1 \neq A_4$
- $A_2 \neq A_4$

また、登場する値の最大値が $2$ 以下である数列であって、これらの条件をすべて満たすものは存在しないので、この出力は適当です。