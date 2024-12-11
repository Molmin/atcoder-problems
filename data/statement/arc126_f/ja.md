配点 : $1100$ 点

## 問題文

$N$ 項からなる正整数列 $X = (X_1, X_2, \ldots, X_N)$ が与えられます。

正の整数 $K$ に対して、整数の組 $(a,b,c)$ のうちで以下の条件がすべて成り立つものの個数を $f(K)$ と書くことにします。

- $1\leq c \leq K$
- $0\leq a &lt; c$ かつ $0\leq b &lt; c$
- 各 $i$ に対して $aX_i + b$ を $c$ で割った余りを $Y_i$ とするとき、$Y_1 &lt; Y_2 &lt; \cdots &lt; Y_N$ が成り立つ。

極限 $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3}$ が存在することが証明できます。
この値を $\mod 998244353$ で求めてください（注記参照）。

## 注記

求める極限は必ず有理数となることが証明できます。またこの問題の制約下では、その値を互いに素な $2$ つの整数 $P, Q$ を用いて $\frac{P}{Q}$ と表したとき、$R\times Q\equiv P\pmod{998244353}$ かつ $0\leq R &lt; 998244353$ を満たす整数 $R$ がただ一つ存在することが証明できます。この $R$ を求めてください。

## 制約

- $2\leq N\leq 10^3$
- $X_i$ は正の整数で、$\sum_{i=1}^N X_i \leq 5\times 10^5$ を満たす
- $i\neq j$ ならば $X_i\neq X_j$

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$

## 出力

$\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3}$ を $\mod 998244353$ で出力してください。

```input1
3
3 1 2
```

```output1
291154603
```

- 例えば $(a,b,c) = (3,5,7)$ とすると、$Y_1 = 0$, $Y_2 = 1$, $Y_3 = 4$ となり、$Y_1 &lt; Y_2 &lt; Y_3$ が成り立ちます。
- $f(1) = 0$, $f(2) = 0$, $f(3) = 1$, $f(4) = 2$, $f(5) = 5$ が成り立ちます。
- $\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = \frac{1}{24}$ が成り立ちます。

```input2
3
5 9 2
```

```output2
832860616
```

$\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = \frac{55}{1008}$ が成り立ちます。

```input3
2
2 3
```

```output3
166374059
```

$\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = \frac{1}{6}$ が成り立ちます。

```input4
4
4 5 3 2
```

```output4
0
```

$\displaystyle \lim_{K\to\infty} \frac{f(K)}{K^3} = 0$ が成り立ちます。