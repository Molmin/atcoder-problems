配点 : $400$ 点

## 問題文

実数 $L,R$ に対して、$L$ 以上 $R$ 未満からなる実数の集合を $[L,R)$ と表します。このような形で表される集合を右半開区間といいます。

$N$ 個の右半開区間 $[L_i,R_i)$ が与えられます。これらの和集合を $S$ とします。$S$ を最小の個数の右半開区間の和集合として表してください。

## 制約

- $1 \leq N \leq 2\times 10^5$
- $1 \leq L_i \lt R_i \leq 2\times 10^5$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $L_1$ $R_1$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## 出力

$S$ が最小で $k$ 個の右半開区間の和集合で表せるとする。そのような $k$ 個の右半開区間 $[X_i,Y_i)$ を $X_i$ の昇順で以下のように $k$ 行出力せよ。

> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_k$ $Y_k$

```input1
3
10 20
20 30
40 50
```

```output1
10 30
40 50
```

$3$ つの右半開区間 $[10,20),[20,30),[40,50)$ の和集合は $2$ つの右半開区間 $[10,30),[40,50)$ の和集合と等しくなります。

```input2
3
10 40
30 60
20 50
```

```output2
10 60
```

$3$ つの右半開区間 $[10,40),[30,60),[20,50)$ の和集合は $1$ つの右半開区間 $[10,60)$ と等しくなります。