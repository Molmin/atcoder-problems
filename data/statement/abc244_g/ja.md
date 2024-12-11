配点 : $600$ 点

## 問題文

$N$ 個の頂点と $M$ 本の辺からなる単純（自己ループおよび多重辺を持たない）かつ連結な無向グラフが与えられます。<br>
$i = 1, 2, \ldots, M$ について、$i$ 番目の辺は頂点 $u_i$ と頂点 $v_i$ を結びます。

下記の $2$ つの条件をともに満たす整数列 $(A_1, A_2, \ldots, A_k)$ を長さ $k$ の**パス**と呼びます。

- すべての $i = 1, 2, \dots, k$ について、$1 \leq A_i \leq N$ 。
- すべての $i = 1, 2, \ldots, k-1$ について、頂点 $A_i$ と頂点 $A_{i+1}$ は辺で直接結ばれている。

空列も長さ $0$ のパスとみなします。

$0$ と $1$ のみからなる長さ $N$ の文字列 $S = s_1s_2\ldots s_N$ が与えられます。
パス $A = (A_1, A_2, \ldots, A_k)$ が下記を満たすとき、パス $A$ を $S$ に関する**良いパス**と呼びます。

- すべての $i = 1, 2, \ldots, N$ について、次を満たす。-   - $s_i = 0$ ならば、$A$ に含まれる $i$ の個数は偶数である。
-   - $s_i = 1$ ならば、$A$ に含まれる $i$ の個数は奇数である。

この問題の制約下において、$S$ に関する長さ $4N$ 以下の良いパスが少なくとも $1$ つ存在することが示せます。
$S$ に関する長さ $4N$ 以下の良いパスを $1$ つ出力してください。

## 制約

- $2 \leq N \leq 10^5$
- $N-1 \leq M \leq \min\lbrace 2 \times 10^5, \frac{N(N-1)}{2}\rbrace$
- $1 \leq u_i, v_i \leq N$
- 与えられるグラフは単純かつ連結
- $N, M, u_i, v_i$ は整数
- $S$ は $0$ と $1$ のみからなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $S$

## 出力

$S$ に関する長さ $4N$ 以下の良いパスを下記の形式にしたがって出力せよ。
すなわち、$1$ 行目にパスの長さ $K$ を出力し、$2$ 行目にパスの各要素を空白区切りで出力せよ。

> $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$

```input1
6 6
6 3
2 5
4 2
1 3
6 5
3 2
110001
```

```output1
9
2 5 6 5 6 3 1 3 6
```

パス $(2, 5, 6, 5, 6, 3, 1, 3, 6)$ は、長さが $4N$ 以下であり、

- 含まれる $1$ の個数は奇数（ $1$ 個）
- 含まれる $2$ の個数は奇数（ $1$ 個）
- 含まれる $3$ の個数は偶数（ $2$ 個）
- 含まれる $4$ の個数は偶数（ $0$ 個）
- 含まれる $5$ の個数は偶数（ $2$ 個）
- 含まれる $6$ の個数は奇数（ $3$ 個）

であるため、$S = 110001$ に関する良いパスです。

```input2
3 3
3 1
3 2
1 2
000
```

```output2
0
```

空のパス $()$ は、$S = 000000$ に関する良いパスです。
代わりにパス $(1, 2, 3, 1, 2, 3)$ などを出力しても正解となります。