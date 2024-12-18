配点 : $550$ 点

## 問題文

正整数 $N, M, K$ と、長さ $N$ の正整数列 $(C_1, C_2, \ldots, C_N)$ が与えられるので、
$r = 0, 1, 2, \ldots, N-1$ の場合それぞれについて、下記の問題の答えを出力してください。

色がついた $N$ 個のボールからなる列があり、$i = 1, 2, \ldots, N$ について、列の先頭から $i$ 番目にあるボールの色は $C_i$ です。
また、$1$ から $M$ の番号がつけられた $M$ 個の空の箱があります。

下記の手順を行った後に箱に入っているボールの総数を求めてください。

- <p>まず、下記の操作を $r$ 回行う。</p>
-   - 列の先頭のボール $1$ 個を列の最後尾に移動する。
- <p>その後、列にボールが $1$ 個以上残っている限り、下記の操作を繰り返す。</p>
-   - 列の先頭のボールと同じ色のボールが既に $1$ 個以上 $K$ 個未満入っている箱が存在する場合、その箱に列の先頭のボールを入れる。
-   - そのような箱が存在しない場合、-   -   - 空の箱が存在するなら、そのうち番号が最小のものに、列の先頭のボールを入れる。
-   -   - 空の箱が存在しない場合、列の先頭のボールをどの箱にも入れず、食べる。

## 制約

- 入力される値はすべて整数
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M, K \leq N$
- $1 \leq C_i \leq N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## 出力

$r = 0, 1, 2, \ldots, N-1$ のそれぞれの場合の問題の答え $X_r$ を下記の通りに $N$ 行にわたって出力せよ。

> $X_0$
> 
> $X_1$
> 
> $\vdots$
> 
> $X_{N-1}$

```input1
7 2 2
1 2 3 5 2 5 4
```

```output1
3
3
3
4
4
3
2
```

例として、$r = 1$ の場合の手順を説明します。
まず「列の先頭のボール $1$ 個を列の最後尾に移動する」ことを $1$ 回行い、ボールの色の列は $(2, 3, 5, 2, 5, 4, 1)$ となります。
その後、ボールを箱に入れていく操作を下記の通りに行います。

- $1$ 回目の操作：先頭のボールの色は $2$ です。色 $2$ のボールが $1$ 個以上 $2$ 個未満入った箱は存在しないため、先頭のボールを空の箱のうち番号が最小の箱 $1$ に入れます。
- $2$ 回目の操作：先頭のボールの色は $3$ です。色 $3$ のボールが $1$ 個以上 $2$ 個未満入った箱は存在しないため、先頭のボールを空の箱のうち番号が最小の箱 $2$ に入れます。
- $3$ 回目の操作：先頭のボールの色は $5$ です。色 $5$ のボールが $1$ 個以上 $2$ 個未満入った箱も空の箱も存在しないため、先頭のボールを食べます。
- $4$ 回目の操作：先頭のボールの色は $2$ です。色 $2$ のボールが $1$ 個以上 $2$ 個未満入った箱として箱 $1$ が存在するため、先頭のボールを箱 $1$ に入れます。
- $5$ 回目の操作：先頭のボールの色は $5$ です。色 $5$ のボールが $1$ 個以上 $2$ 個未満入った箱も空の箱も存在しないため、先頭のボールを食べます。
- $6$ 回目の操作：先頭のボールの色は $4$ です。色 $4$ のボールが $1$ 個以上 $2$ 個未満入った箱も空の箱も存在しないため、先頭のボールを食べます。
- $7$ 回目の操作：先頭のボールの色は $1$ です。色 $1$ のボールが $1$ 個以上 $2$ 個未満入った箱も空の箱も存在しないため、先頭のボールを食べます。

最終的に箱に入っているボールの総数は $3$ 個であるので、$r = 1$ の問題の答えは $3$ です。

```input2
20 5 4
20 2 20 2 7 3 11 20 3 8 7 9 1 11 8 20 2 18 11 18
```

```output2
14
14
14
14
13
13
13
11
8
9
9
11
13
14
14
14
14
14
14
13
```