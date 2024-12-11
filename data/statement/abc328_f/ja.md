配点 : $525$ 点

## 問題文

$Q$ 個の整数の $3$ つ組 $(a_1, b_1, d_1), (a_2, b_2, d_2), \ldots, (a_Q, b_Q, d_Q)$ が与えられます。

集合 $\lbrace 1, 2, \ldots, Q\rbrace$ の部分集合 $S$ が**良い集合**であることを、
下記の条件を満たす長さ $N$ の整数列 $(X_1, X_2, \ldots, X_N)$ が存在することと定めます。

すべての $i \in S$ について、$X_{a_i} - X_{b_i} = d_i$ が成り立つ。

$S$ が空集合である状態から始め、$i = 1, 2, \ldots, Q$ の順に下記の操作を行います。

もし $S \cup \lbrace i \rbrace$ が良い集合なら、$S$ を $S \cup \lbrace i \rbrace$ で置き換える。

最終的な $S$ のすべての要素を**昇順に**出力してください。

## 制約

- 入力される値はすべて整数
- $1 \leq N, Q \leq 2 \times 10^5$
- $1 \leq a_i, b_i \leq N$
- $-10^9 \leq d_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $Q$
> 
> $a_1$ $b_1$ $d_1$
> 
> $a_2$ $b_2$ $d_2$
> 
> $\vdots$
> 
> $a_Q$ $b_Q$ $d_Q$

## 出力

最終的な $S$ のすべての要素を**昇順に**並べた列 $(s_1, s_2, \ldots, s_k)$ を、下記の形式で空白区切りで出力せよ。

> $s_1$ $s_2$ $\ldots$ $s_k$

```input1
3 5
1 2 2
3 2 -3
2 1 -1
3 3 0
1 3 5
```

```output1
1 2 4 5
```

$S$ が空集合である状態から始め、$i = 1, 2, 3, 4, 5$ の順に問題文中の操作を下記の通り行います。

- $i = 1$ について、集合 $S \cup \lbrace i \rbrace = \lbrace 1 \rbrace$ は良い集合です。なぜなら、例えば $(X_1, X_2, X_3) = (3, 1, 4)$ が問題文中の条件を満たすからです。よって、$S$ を $\lbrace 1\rbrace$ で置き換えます。
- $i = 2$ について、集合 $S \cup \lbrace i \rbrace = \lbrace 1, 2 \rbrace$ は良い集合です。なぜなら、例えば $(X_1, X_2, X_3) = (3, 1, -2)$ が問題文中の条件を満たすからです。よって、$S$ を $\lbrace 1, 2\rbrace$ で置き換えます。
- $i = 3$ について、集合 $S \cup \lbrace i \rbrace = \lbrace 1, 2, 3 \rbrace$ は良い集合ではありません。
- $i = 4$ について、集合 $S \cup \lbrace i \rbrace = \lbrace 1, 2, 4 \rbrace$ は良い集合です。なぜなら、例えば $(X_1, X_2, X_3) = (3, 1, -2)$ が問題文中の条件を満たすからです。よって、$S$ を $\lbrace 1, 2, 4\rbrace$ で置き換えます。
- $i = 5$ について、集合 $S \cup \lbrace i \rbrace = \lbrace 1, 2, 4, 5 \rbrace$ は良い集合です。なぜなら、例えば $(X_1, X_2, X_3) = (3, 1, -2)$ が問題文中の条件を満たすからです。よって、$S$ を $\lbrace 1, 2, 4, 5\rbrace$ で置き換えます。

よって、最終的な $S$ は $\lbrace 1, 2, 4, 5\rbrace$ です。

```input2
200000 1
1 1 1
```

```output2

```

最終的な $S$ は空集合です。

```input3
5 20
4 2 125421359
2 5 -191096267
3 4 -42422908
3 5 -180492387
3 3 174861038
2 3 -82998451
3 4 -134761089
3 1 -57159320
5 2 191096267
2 4 -120557647
4 2 125421359
2 3 142216401
4 5 -96172984
3 5 -108097816
1 5 -50938496
1 2 140157771
5 4 65674908
4 3 35196193
4 4 0
3 4 188711840
```

```output3
1 2 3 6 8 9 11 14 15 16 17 19
```