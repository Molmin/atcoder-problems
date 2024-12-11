配点 : $400$ 点

## 問題文

$\mathrm{popcount}(n)$ を $n$ を $2$ 進表記したときの `1` の個数とします。
例えば、$\mathrm{popcount}(3) = 2, \mathrm{popcount}(7) = 3, \mathrm{popcount}(0) = 0$ です。

$f(n)$ を、「$n$ を $\mathrm{popcount}(n)$ で割ったあまりに置き換える」という操作を繰り返した際に $n$ が $0$ になるまでの操作回数とします(この問題の制約下で $n$ が有限回の操作後に必ず $0$ になることが証明できます)。

以下は $n=7$ の例で、$2$ 回の操作で $n$ が $0$ になります。

- $\mathrm{popcount}(7)=3$ なので、$7$ を $3$ で割ったあまりである $1$ に置き換えます。
- $\mathrm{popcount}(1)=1$ なので、$1$ を $1$ で割ったあまりである $0$ に置き換えます。

$2$ 進表記で $N$ 桁の整数 $X$ が与えられます。
$1 \leq i \leq N$ を満たす整数 $i$ について、$X$ の上から $i$ 桁目のビットを反転した整数を $X_i$ とします。
$f(X_1), f(X_2), \ldots, f(X_N)$ を求めてください。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $X$ は $2$ 進表記で $N$ 桁の(先頭の桁が $1$ とは限らない)整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $X$

## 出力

$N$ 行出力せよ。$i$ 行目には $f(X_i)$ の値を出力せよ。

```input1
3
011
```

```output1
2
1
1
```

- $X_1 = 7$ です。$7 \rightarrow 1 \rightarrow 0$ となるので $f(7) = 2$ です。
- $X_2 = 1$ です。$1 \rightarrow 0$ となるので $f(1) = 1$ です。
- $X_3 = 2$ です。$2 \rightarrow 0$ となるので $f(2) = 1$ です。

```input2
23
00110111001011011001110
```

```output2
2
1
2
2
1
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
1
3
```