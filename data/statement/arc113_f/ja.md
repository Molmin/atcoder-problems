配点 : $1000$ 点

## 問題文

長さ $N+1$ の整数列 $X_0,X_1,\ldots,X_N$ が与えられます。
ここで、$0=X_0 &lt; X_1 &lt; \ldots &lt; X_N$ です。

これから、$1$ から $N$ までの番号のついた $N$ 人の人が、数直線上に現れます。
人 $i$ は、区間 $[X_{i-1},X_i]$ の中から一様ランダムに選ばれた**実数**座標に出現します。

人と人の距離の最小値の期待値を $\bmod 998244353$ で求めてください。

期待値 $\bmod 998244353$ の定義

求める期待値は必ず有理数になることが証明できます。
また、この問題の制約のもとでは、その値を既約分数 $\frac{P}{Q}$ で表した時、$Q \neq 0 \pmod{998244353}$ となることも証明できます。
よって、$R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$ を満たす整数 $R$ が一意に定まります。
この $R$ を答えてください。

## 制約

- $2 \leq N \leq 20$
- $0=X_0 &lt; X_1 &lt; \cdots &lt; X_N \leq 10^6$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $X_0$ $X_1$ $\ldots$ $X_N$

## 出力

人と人の距離の最小値の期待値を $\bmod 998244353$ で出力せよ。

```input1
2
0 1 3
```

```output1
499122178
```

人が二人しかいないので、人と人の距離の最小値の期待値は、人 $1$ と人 $2$ の距離の期待値と同じです。
答えは $3/2$ です。

```input2
5
0 3 4 8 9 14
```

```output2
324469854
```

答えは $196249/172800$ です。

```input3
20
0 38927 83112 125409 165053 204085 246405 285073 325658 364254 406395 446145 485206 525532 563762 605769 644863 683453 722061 760345 798556
```

```output3
29493181
```