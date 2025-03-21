配点 : $400$ 点

## 問題文

高橋君が住んでいる二次元平面上の街には $N$ 個のジャンプ台があります。$i$ 番目のジャンプ台は点 $(x_i, y_i)$ にあり、ジャンプ台のパワーは $P_i$ です。また高橋君のジャンプ力は $S$ で表され、はじめ $S=0$ です。高橋君が訓練を $1$ 回行う度に $S$ は $1$ 増えます。

高橋君は以下の条件を満たす場合に限り、$i$ 番目のジャンプ台から $j$ 番目のジャンプ台にジャンプすることができます。

- $P_iS\geq |x_i - x_j| +|y_i - y_j|$

高橋君の目的は、適切に始点とするジャンプ台を決めることで、そのジャンプ台からどのジャンプ台にも何回かのジャンプで移動できるようにすることです。

目的を達成するためには高橋君は最低で何回訓練を行う必要があるでしょうか？

## 制約

- $2 \leq N \leq 200$
- $-10^9 \leq x_i,y_i \leq 10^9$
- $1 \leq P_i \leq 10^9$
- $(x_i, y_i) \neq (x_j,y_j)\ (i\neq j)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $x_1$ $y_1$ $P_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$ $P_N$

## 出力

答えを出力せよ。

```input1
4
-10 0 1
0 0 5
10 0 1
11 0 1
```

```output1
2
```

高橋君が $2$ 回訓練したとすると、 $S=2$ です。
このとき、$2$ 番目のジャンプ台から全てのジャンプ台に移動することができます。

例えば、$4$ 番目のジャンプ台へは以下の方法で移動ができます。

- <p>$2$ 番目のジャンプ台から $3$ 番目のジャンプ台へジャンプする。（ $P_2 S = 10, |x_2-x_3| + |y_2-y_3| = 10$ であり、 $P_2 S \geq |x_2-x_3| + |y_2-y_3|$ を満たす。）</p>
- <p>$3$ 番目のジャンプ台から $4$ 番目のジャンプ台へジャンプする。（ $P_3 S = 2, |x_3-x_4| + |y_3-y_4| = 1$ であり、 $P_3 S \geq |x_3-x_4| + |y_3-y_4|$ を満たす。）</p>

```input2
7
20 31 1
13 4 3
-10 -15 2
34 26 5
-2 39 4
0 -50 1
5 -20 2
```

```output2
18
```