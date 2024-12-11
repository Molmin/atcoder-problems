配点 : $700$ 点

## 問題文

リマクは、文字列の先頭 $2$ 文字のうち片方を取り除くことを繰り返し行えます。例えば、$abcxyx \rightarrow acxyx \rightarrow cxyx \rightarrow cyx$ とすることができます。

$N$ 個の相異なる文字列 $S_1, S_2, \ldots, S_N$ が与えられます。$N \cdot (N-1) / 2$ 個のペア $(S_i, S_j)$ のうち何個において、リマクは一方からもう一方を得ることができるでしょうか。

## 制約

- $2 \leq N \leq 200\,000$
- $S_i$ は英小文字 `a` - `z` からなる。
- $S_i \neq S_j$
- $1 \leq |S_i|$
- $|S_1| + |S_2| + \ldots + |S_N| \leq 10^6$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

リマクが一方の文字列からもう一方を得られるような非順序対 $(S_i, S_j)$ ($i \neq j$) の個数を出力せよ。

```input1
3
abcxyx
cyx
abc
```

```output1
1
```

条件を満たすペアは $(abcxyx, cyx)$ のみです。

```input2
6
b
a
abc
c
d
ab
```

```output2
5
```

条件を満たすペアは $(b, abc)$, $(a, abc)$, $(abc, c)$, $(b, ab)$, $(a, ab)$ の $5$ 個です。