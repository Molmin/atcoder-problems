配点 : $475$ 点

## 問題文

長さ $N$ の非負整数列 $A=(A_1,A_2,\dots,A_N)$ と、正整数 $M$ が与えられます。

次の値を求めてください。

\[
\sum_{1 \leq l \leq r \leq N} \left( \left(\sum_{l \leq i \leq r} A_i\right) \mathbin{\mathrm{mod}} M \right)
\]

ここで、$X \mathbin{\mathrm{mod}} M$ で、非負整数 $X$ を $M$ で割ったあまりを表します。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

答えを出力せよ。

```input1
3 4
2 5 0
```

```output1
10
```

- $A_1 \mathbin{\mathrm{mod}} M = 2$
- $(A_1+A_2) \mathbin{\mathrm{mod}} M = 3$
- $(A_1+A_2+A_3) \mathbin{\mathrm{mod}} M = 3$
- $A_2 \mathbin{\mathrm{mod}} M = 1$
- $(A_2+A_3) \mathbin{\mathrm{mod}} M = 1$
- $A_3 \mathbin{\mathrm{mod}} M = 0$

これらの総和の $10$ が答えです。外側の総和のあまりは取らないことに注意してください。

```input2
10 100
320 578 244 604 145 839 156 857 556 400
```

```output2
2736
```