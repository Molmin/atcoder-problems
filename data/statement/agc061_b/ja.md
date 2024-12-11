配点 : $800$ 点

## 問題文

左側に $N$ 個の頂点 $v_1, \ldots, v_N$、右側に $N + 1$ 個の頂点 $u_1, \ldots, u_{N + 1}$ を持つグラフがあります。各頂点 $v_i$ ($1 \leq i \leq N$) は各頂点 $u_j$ ($1 \leq j \leq N + 1$) と結ばれています。すなわち、グラフは $N(N + 1)$ 本の辺を持ちます。

各辺を、$N$ 種類の色 $1, \ldots, N$ のうちいずれか一つで塗ります。$k = 1, \ldots, N$ のいずれに対しても、色 $k$ の辺がちょうど $2k$ 本あってそれらが単純パスをなすとき、塗り方を**適切**であるとします。

形式的には、各 $k = 1, \ldots, N$ について相異なる頂点の列 $w_0, \ldots, w_{2k}$ が存在して以下をすべて満たすとき、塗り方は適切です。

- 各 $i = 0, \ldots, 2k - 1$ について、頂点 $w_i$ と $w_{i + 1}$ は色 $k$ の辺で結ばれている。
- 色 $k$ の辺は他に存在しない。

適切な塗り方をいずれか一つ、あるいはそれが存在しないことを見出してください。

各入力ファイルについて、テストケースを $T$ 個解いてください。

## 制約

- $1 \leq T \leq 100$
- $1 \leq N \leq 100$

## 入力

入力は、標準入力から以下の形式で与えられる。

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

各ケースは、以下の形式である。

> $N$

## 出力

それぞれのケースについて、適切な塗り方が存在しないなら、`No` を出力せよ。そうでないなら、以下の形式で適切な塗り方を一つ出力せよ。

> Yes
> 
> $C_{1, 1}$ $C_{1, 2}$ $\ldots$ $C_{1, N + 1}$
> 
> $\vdots$
> 
> $C_{N, 1}$ $C_{N, 2}$ $\ldots$ $C_{N, N + 1}$

ここで、$C_{i, j}$ は $v_i$ と $u_j$ を結ぶ辺の色である。

適切な塗り方が複数ある場合は、いずれを出力してもよい。

```input1
2
1
2
```

```output1
Yes
1 1
No
```