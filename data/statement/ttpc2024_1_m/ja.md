配点 : $100$ 点

## 問題文

$(1, 2, \dots, N)$ の順列 $A = (A_1, A_2, \dots, A_N)$ が与えられます。<br>
整数の組 $l, r$ ($1 \le l \le r \le N$) に対し、**Cartesian Tree** $\text{C}(l, r)$ を以下のように定義します。

- $\text{C}(l, r)$ は $r-l+1$ 頂点の根付きの二分木である。この木の根を $\mathit{rt}$ と書くことにする。
- 整数 $m$ を、$A_m = \min\lbrace A_l, A_{l+1}, \dots, A_r\rbrace$ を満たす唯一の整数とする。
- $l &lt; m$ のとき、$\mathit{rt}$ の左部分木は $\text{C}(l, m-1)$ である。$l = m$ のとき、$\mathit{rt}$ に左の子は存在しない。
- $m &lt; r$ のとき、$\mathit{rt}$ の右部分木は $\text{C}(m+1, r)$ である。$m = r$ のとき、$\mathit{rt}$ に右の子は存在しない。

$Q$ 組の整数 $(l_1, r_1), (l_2, r_2), \dots, (l_Q, r_Q)$ が与えられます。$\text{C}(l_1, r_1), \text{C}(l_2, r_2), \dots, \text{C}(l_Q, r_Q)$ の中に Cartesian Tree が何種類あるかを求めてください。<br>
ただし、$2$ つの Cartesian Tree $X, Y$ は、以下の条件をすべて満たすとき、かつそのときに限り同じ Cartesian Tree であると見なされます。

$X$ の根を $\mathit{rt}_X$ と書き、$Y$ の根を $\mathit{rt}_Y$ と書くことにする。

- $\mathit{rt}_X$ に左の子が存在するならば、$\mathit{rt}_Y$ にも左の子が存在し、「$\mathit{rt}_X$ の左部分木」と「$\mathit{rt}_Y$ の左部分木」は同じ Cartesian Tree である。
- $\mathit{rt}_X$ に左の子が存在しないならば、$\mathit{rt}_Y$ の左の子も存在しない。
- $\mathit{rt}_X$ に右の子が存在するならば、$\mathit{rt}_Y$ にも右の子が存在し、「$\mathit{rt}_X$ の右部分木」と「$\mathit{rt}_Y$ の右部分木」は同じ Cartesian Tree である。
- $\mathit{rt}_X$ に右の子が存在しないならば、$\mathit{rt}_Y$ の右の子も存在しない。

## 制約

- 入力はすべて整数
- $1 \le N \le 4 \times 10^5$
- $A$ は $(1, 2, \dots, N)$ の順列である。
- $1 \le Q \le 4 \times 10^5$
- $1 \le l_i \le r_i \le N$ ($1 \le i \le Q$)
- $(l_i, r_i) \ne (l_j, r_j)$ ($1 \le i &lt; j \le Q$)

## 入力

入力は以下の形式で与えられる。

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $Q$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_Q$ $r_Q$

## 出力

答えを出力せよ。

```input1
6
1 4 2 6 3 5
3
1 4
2 5
3 6
```

```output1
2
```

$\text{C}(1, 4), \text{C}(2, 5), \text{C}(3, 6)$ はそれぞれ以下のような Cartesian Tree です。  

![](https://img.atcoder.jp/ttpc2024_1/db8d0d930aa8deab6edbf6d1cc510f0f.svg)

$\text{C}(1, 4)$ と $\text{C}(3, 6)$ は同じ Cartesian Tree で、$\text{C}(2, 5)$ はこれらとは異なる Cartesian Tree です。したがって、Cartesian Tree は $2$ 種類存在します。

```input2
4
1 2 3 4
10
1 1
2 2
3 3
4 4
1 2
2 3
3 4
1 3
2 4
1 4
```

```output2
4
```

```input3
10
3 8 4 7 2 5 9 10 1 6
13
5 8
2 6
7 9
3 8
3 5
2 4
4 6
1 9
3 7
6 9
2 10
4 9
3 9
```

```output3
11
```