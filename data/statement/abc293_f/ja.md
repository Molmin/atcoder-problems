配点 : $500$ 点

## 問題文

$2$ 以上の整数 $N$ が与えられます。下記の条件を満たす $2$ 以上の整数 $b$ の個数を出力してください。

- $N$ を $b$ 進法で表記したとき、すべての桁について「その桁が $0$ または $1$ である」が成り立つ。

$T$ 個の独立なテストケースについて答えを求めてください。

なお、本問題の制約下において、上記の「条件を満たす $2$ 以上の整数 $b$ の個数」は有限であることが証明できます。

## 制約

- $1 \leq T \leq 1000$
- $2 \leq N \leq 10^{18}$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。ここで、$\mathrm{test}_i$ は $i$ 番目のテストケースを表す。

> $T$
> 
> $\mathrm{test}_1$
> 
> $\mathrm{test}_2$
> 
> $\vdots$
> 
> $\mathrm{test}_T$

各テストケースは以下の形式で与えられる。

> $N$

## 出力

$T$ 行出力せよ。
$i = 1, 2, \ldots, T$ について、$i$ 行目には $i$ 番目のテストケースに対する答えを出力せよ。

```input1
3
12
2
36
```

```output1
4
1
5
```

$1$ 番目のテストケースについて、問題文中の条件を満たす $b$ は、$b = 2, 3, 11, 12$ の $4$ つです。
実際、$N = 12$ を $2, 3, 11, 12$ 進法で表すと、それぞれ $1100, 110, 11, 10$ となります。