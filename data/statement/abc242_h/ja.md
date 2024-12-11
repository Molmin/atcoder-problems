配点 : $600$ 点

## 問題文

$1$ から $N$ までの番号が振られた $N$ 個のマスがあり、始めすべてのマスは白く塗られています。

また、箱の中に $1$ から $M$ までの番号が振られた $M$ 個のボールが入っています。

以下の操作を、$N$ 個のマスがすべて黒く塗られるまで繰り返します。

1. 箱から $1$ つボールを取り出す。取り出し方は完全ランダムであり、各ボールは等確率で選ばれる。
2. 取り出したボールの番号を $x$ として、マス $L_x, L_x+1, \ldots, R_x$ を黒く塗る。
3. 取り出したボールを箱に戻す。

操作回数の期待値を $\text{mod } 998244353$ で求めてください（注記参照）。

## 注記

求める期待値は必ず有理数となることが証明できます。またこの問題の制約下では、その値を互いに素な $2$ つの整数 $P$, $Q$ を用いて $\frac{P}{Q}$ と表したとき、$R \times Q \equiv P\pmod{998244353}$ かつ $0 \leq R \lt 998244353$ を満たす整数 $R$ がただ一つ存在することが証明できます。この $R$ を求めてください。

## 制約

- $1 \leq N,M \leq 400$
- $1 \leq L_i \leq R_i \leq N$
- すべてのマス $i$ についてある整数 $j$ が存在し、$L_j \leq i \leq R_j$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\hspace{0.5cm}\vdots$
> 
> $L_M$ $R_M$

## 出力

求めた期待値を $\text{mod } 998244353$ で出力せよ。

```input1
3 3
1 1
1 2
2 3
```

```output1
499122180
```

求める期待値は $\frac{7}{2}$ です。

$499122180 \times 2 \equiv 7\pmod{998244353}$ なので、$499122180$ を出力します。

```input2
13 10
3 5
5 9
3 12
1 13
9 11
12 13
2 4
9 12
9 11
7 11
```

```output2
10
```

```input3
100 11
22 43
84 93
12 71
49 56
8 11
1 61
13 80
26 83
23 100
80 85
9 89
```

```output3
499122193
```