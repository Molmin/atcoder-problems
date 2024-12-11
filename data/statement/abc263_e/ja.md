配点 : $500$ 点

## 問題文

マス $1$ からマス $N$ の $N$ 個のマスがあります。はじめ、あなたはマス $1$ にいます。

また、マス $1$ からマス $N-1$ にはそれぞれサイコロが置いてあります。マス $i$ のサイコロは $0$ 以上 $A_i$ 以下の整数を等確率にランダムで出します。(サイコロを振る操作は毎回独立です。)

あなたは、マス $N$ に到達するまで、現在いるマスに置かれているサイコロを振り、出た目の数だけ進むことを繰り返します。厳密に言うと、マス $X$ にいるときにサイコロで $Y$ が出た場合はマス $X+Y$ に移動します。

サイコロを振る回数の期待値 $\bmod\ 998244353$ を求めてください。

## 注記

求める期待値は必ず有理数となることが証明できます。またこの問題の制約下では、その値を互いに素な $2$ つの整数 $P$, $Q$ を用いて $\frac{P}{Q}$ と表したとき、$R \times Q \equiv P\pmod{998244353}$ かつ $0 \leq R \lt 998244353$ を満たす整数 $R$ がただ一つ存在することが証明できます。この $R$ を求めてください。

## 制約

- $2 \le N \le 2 \times 10^5$
- $1 \le A_i \le N-i(1 \le i \le N-1)$
- 入力は全て整数。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_{N-1}$

## 出力

答えを出力せよ。

```input1
3
1 1
```

```output1
4
```

求める期待値は $4$ であるため、$4$ を出力します。

マス $N$ に到達するまでの流れとしては、以下のようなものが考えられます。

- マス $1$ で $1$ を出し、マス $2$ に移動する。
- マス $2$ で $0$ を出し、移動しない。
- マス $2$ で $1$ を出し、マス $3$ に移動する。

このようになる確率は $\frac{1}{8}$ です。

```input2
5
3 1 2 1
```

```output2
332748122
```