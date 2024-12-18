配点 : $400$ 点

## 問題文

一列に並んだ $N$ マスから成るマス目があり、マスには左から順番に$1, 2, \ldots, N$ の番号がついています。

このマス目で暮らしている高橋君は、現在マス $1$ にいて、後述の方法で移動を繰り返してマス $N$ へ行こうとしています。

$10$ 以下の整数 $K$ と、共通部分を持たない $K$ 個の区間 $[L_1, R_1], [L_2, R_2], \ldots, [L_K, R_K]$ が与えられ、これらの区間の和集合を $S$ とします。ただし、区間 $[l, r]$ は $l$ 以上 $r$ 以下の整数の集合を表します。

- マス $i$ にいるとき、$S$ から整数を $1$ つ選んで ($d$ とする)、マス $i + d$ に移動する。ただし、マス目の外に出るような移動を行ってはならない。

高橋君のために、マス $N$ に行く方法の個数を $998244353$ で割った余りを求めてください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq \min(N, 10)$
- $1 \leq L_i \leq R_i \leq N$
- $[L_i, R_i]$ と $[L_j, R_j]$ は共通部分を持たない ($i \neq j$)
- 入力はすべて整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $:$
> 
> $L_K$ $R_K$

## 出力

高橋くんがマス $1$ からマス $N$ に行く方法の個数を $998244353$ で割った余りを出力せよ。

```input1
5 2
1 1
3 4
```

```output1
4
```

集合 $S$ は 区間 $[1, 1]$ と区間 $[3, 4]$ の和集合であり、$S = \{ 1, 3, 4 \}$ です。

マス $5$ へ移動する方法は次の $4$ 通りが考えられます。

- マス $1, 2, 3, 4, 5$ の順に移動する。
- マス $1, 2, 5$ の順に移動する。
- マス $1, 4, 5$ の順に移動する。
- マス $1, 5$ の順に移動する。

```input2
5 2
3 3
5 5
```

```output2
0
```

$S = \{ 3, 5 \}$ であり、そもそもマス $5$ にたどり着けないので $0$ を出力してください。

```input3
5 1
1 2
```

```output3
5
```

```input4
60 3
5 8
1 3
10 15
```

```output4
221823067
```

$998244353$ で割った余りを出力することに注意してください。