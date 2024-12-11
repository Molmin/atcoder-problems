配点 : $650$ 点

## 問題文

頂点に $1$ から $N$ の番号がついた $N$ 頂点の根付き木があります。<br>
頂点 $1$ が根で、頂点 $i$ $(2 \leq i \leq N)$ の親は頂点 $p_i$ です。$(p_i \lt i)$<br>
また、数列 $A = (A_1, A_2, \dots, A_N)$ があります。  

根付き木の **ハッシュ値** を次の手順によって得られる値とします。

- $f(n)$ $(1 \leq n \leq N)$ を $n = N, N-1, \dots, 2, 1$ の順に次の計算をすることで得られる値とする。-   - 頂点 $n$ が葉の場合、$f(n) = A_n$ とする。
-   - 頂点 $n$ が葉でない場合、$n$ の子からなる集合を $C(n)$ として $\displaystyle f(n) = A_n + \prod_{c \in C(n)} f(c)$ とする。
- $f(1) \bmod{998244353}$ を根付き木のハッシュ値とする。

$Q$ 個のクエリを与えられる順に処理してください。<br>
各クエリでは $v, x$ が与えられるので、$A_v$ の値を $x$ に更新した後、根付き木のハッシュ値を求めてください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq p_i \lt i$
- $0 \leq A_i \lt 998244353$
- $1 \leq v \leq N$
- $0 \leq x \lt 998244353$
- 入力される値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。ここで $\mathrm{query}_i$ は  $i$ 番目のクエリを意味する。

> $N$ $Q$ 
> 
> $p_2$ $p_3$ $\dots$ $p_N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $\mathrm{query}_1$
> 
> $\mathrm{query}_2$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

各クエリは次の形式で与えられる。

> $v$ $x$

## 出力

$Q$ 行出力せよ。$i$ 行目には $i$ 番目のクエリの答えを出力せよ。

```input1
3 2
1 1
3 5 1
3 4
2 1
```

```output1
23
7
```

はじめ、$A = (3, 5, 1)$ です。<br>
$1$ 番目のクエリは次のように処理されます。

- $A_3$ を $4$ に更新する。$A = (3, 5, 4)$ となる。
- 根付き木のハッシュ値は以下の手順により $23$ となるので、これを出力する。-   - 頂点 $3$ は子を持たない。よって $f(3) = 4$ である。
-   - 頂点 $2$ は子を持たない。よって $f(2) = 5$ である。
-   - 頂点 $1$ は頂点 $2, 3$ を子に持つ。よって $f(1) = 3 + 5 \times 4 = 23$ である。
-   - $f(1) \bmod{998244353} = 23$ を根付き木のハッシュ値とする。

$2$ 番目のクエリは次のように処理されます。

- $A_2$ を $1$ に更新する。$A = (3, 1, 4)$ となる。
- 根付き木のハッシュ値は以下の手順により $7$ となるので、これを出力する。-   - 頂点 $3$ は子を持たない。よって $f(3) = 4$ である。
-   - 頂点 $2$ は子を持たない。よって $f(2) = 1$ である。
-   - 頂点 $1$ は頂点 $2, 3$ を子に持つ。よって $f(1) = 3 + 1 \times 4 = 7$ である。
-   - $f(1) \bmod{998244353} = 7$ を根付き木のハッシュ値とする。

```input2
5 4
1 1 2 2
2 5 4 4 1
3 3
5 0
4 5
5 2
```

```output2
29
17
17
47
```

```input3
10 10
1 2 1 2 5 6 3 5 1
766294629 440423913 59187619 725560240 585990756 965580535 623321125 550925213 122410708 549392044
1 21524934
9 529970099
6 757265587
8 219853537
5 687675301
5 844033519
8 780395611
2 285523485
6 13801766
3 487663184
```

```output3
876873846
952166813
626349486
341294449
466546009
331098453
469507939
414882732
86695436
199797684
```