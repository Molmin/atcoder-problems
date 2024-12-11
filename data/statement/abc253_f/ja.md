配点 : $500$ 点

## 問題文

縦 $N$ 行、横 $M$ 列の行列があり、はじめ全ての成分は $0$ です。

以下のいずれかの形式で表されるクエリを $Q$ 個処理してください。

- `1 l r x` : $l$ 列目、$l+1$ 列目、$\ldots$、$r$ 列目の成分全てに $x$ を足す。
- `2 i x` : $i$ 行目の成分全てを $x$ で置き換える。
- `3 i j` : $(i, j)$ 成分を出力する。

## 制約

- $1 \leq N, M, Q \leq 2 \times 10^5$
- `1 l r x` の形式のクエリについて、$1 \leq l \leq r \leq M$ かつ $1 \leq x \leq 10^9$
- `2 i x` の形式のクエリについて、$1 \leq i \leq N$ かつ $1 \leq x \leq 10^9$
- `3 i j` の形式にクエリについて、$1 \leq i \leq N$ かつ $1 \leq j \leq M$
- `3 i j` の形式のクエリが一個以上与えられる
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $Q$
> 
> $\mathrm{Query}_1$
> 
> $\vdots$
> 
> $\mathrm{Query}_Q$

$i$ 番目に与えられるクエリを表す $\mathrm{Query}_i$ は以下のいずれかの形式である。

> $1$ $l$ $r$ $x$
> $2$ $i$ $x$
> $3$ $i$ $j$

## 出力

`3 i j` の形式の各クエリについて、答えを一行に出力せよ。

```input1
3 3 9
1 1 2 1
3 2 2
2 3 2
3 3 3
3 3 1
1 2 3 3
3 3 2
3 2 3
3 1 2
```

```output1
1
2
2
5
3
4
```

行列は次のように変化します。

$\begin{pmatrix} 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \\ \end{pmatrix} \rightarrow \begin{pmatrix} 1 &amp; 1 &amp; 0 \\ 1 &amp; 1 &amp; 0 \\ 1 &amp; 1 &amp; 0 \\ \end{pmatrix} \rightarrow \begin{pmatrix} 1 &amp; 1 &amp; 0 \\ 1 &amp; 1 &amp; 0 \\ 2 &amp; 2 &amp; 2 \\ \end{pmatrix} \rightarrow \begin{pmatrix} 1 &amp; 4 &amp; 3 \\ 1 &amp; 4 &amp; 3 \\ 2 &amp; 5 &amp; 5 \\ \end{pmatrix}$

```input2
1 1 10
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
1 1 1 1000000000
3 1 1
```

```output2
9000000000
```

```input3
10 10 10
1 1 8 5
2 2 6
3 2 1
3 4 7
1 5 9 7
3 3 2
3 2 8
2 8 10
3 8 8
3 1 10
```

```output3
6
5
5
13
10
0
```