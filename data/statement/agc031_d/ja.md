配点 : $1000$ 点

## 問題文

$1$ から $N$ の整数からなる $2$ つの順列 $p$ と $q$ に対して、順列 $f(p,q)$ を以下を満たす順列として定めます。

- $f(p,q)$ の $p_i$ ($1 \leq i \leq N$) 項目の値は $q_i$ である。
  ただし, $p_i$, $q_i$ はそれぞれ $p$, $q$ の $i$ 項目の値を表している。

$1$ から $N$ の整数からなる $2$ つの順列 $p$, $q$ が与えられます。
このとき、$1$ から $N$ の順列からなる列 {$a_n$} を以下のように定めます。

- $a_1=p$, $a_2=q$
- $a_{n+2}=f(a_n,a_{n+1})$ ( $n \geq 1$ )

正整数 $K$ が与えられるので、$a_K$ を求めて下さい。

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq K \leq 10^9$
- $p$ と $q$ は $1$ から $N$ の順列である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $p_1$ ... $p_N$
> 
> $q_1$ ... $q_N$

## 出力

$N$ 個の整数を空白区切りで出力せよ。
$i$ ($1 \leq i \leq N$) 番目には $a_K$ の $i$ 項目の値を出力せよ。

```input1
3 3
1 2 3
3 2 1
```

```output1
3 2 1
```

$a_3=f(p,q)$ であるから、$f(p,q)$ が求められればよいです。
この場合は $p_i=i$ なので、$f(p,q)=q$ となります。

```input2
5 5
4 5 1 2 3
3 2 1 5 4
```

```output2
4 3 2 1 5
```

```input3
10 1000000000
7 10 6 5 4 2 9 1 3 8
4 1 9 2 3 7 8 10 6 5
```

```output3
7 9 4 8 2 5 1 6 10 3
```