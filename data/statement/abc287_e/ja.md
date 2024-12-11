配点 : $500$ 点

## 問題文

英小文字からなる文字列が $N$ 個与えられます。$i \, (i = 1, 2, \dots, N)$ 番目のものを $S_i$ と表します。

二つの文字列 $x, y$ に対し、以下の条件を全て満たす最大の整数 $n$ を $\mathrm{LCP}(x, y)$ と表します。

- $x, y$ の長さはいずれも $n$ 以上
- $1$ 以上 $n$ 以下の全ての整数 $i$ に対し、$x$ の $i$ 文字目と $y$ の $i$ 文字目が等しい

全ての $i = 1, 2, \dots, N$ に対し、以下の値を求めてください。

- $\displaystyle \max_{i \neq j} \mathrm{LCP}(S_i, S_j)$

## 制約

- $2 \leq N \leq 5 \times 10^5$
- $N$ は整数
- $S_i$ は英小文字からなる長さ $1$ 以上の文字列 $(i = 1, 2, \dots, N)$
- $S_i$ の長さの総和は $5 \times 10^5$ 以下

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

$N$ 行出力せよ。$i \, (i = 1, 2, \dots, N)$ 行目には、$\displaystyle \max_{i \neq j} \mathrm{LCP}(S_i, S_j)$ を出力せよ。

```input1
3
abc
abb
aac
```

```output1
2
2
1
```

$\mathrm{LCP}(S_1, S_2) = 2, \mathrm{LCP}(S_1, S_3) = 1, \mathrm{LCP}(S_2, S_3) = 1$ です。  

```input2
11
abracadabra
bracadabra
racadabra
acadabra
cadabra
adabra
dabra
abra
bra
ra
a
```

```output2
4
3
2
1
0
1
0
4
3
2
1
```