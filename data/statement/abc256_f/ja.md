配点 : $500$ 点

## 問題文

$N,Q$ および $A=(A_1,\ldots,A_N)$ が与えられます。<br>
以下のクエリを $Q$ 個処理してください。クエリは次の $2$ 種類のいずれかです。

- `1 x v` : $A_x$ を $v$ に更新する。
- `2 x` : $B_i=\sum_{j=1}^{i}A_j$、$C_i=\sum_{j=1}^{i}B_j$、$D_i=\sum_{j=1}^{i}C_j$ としたときの $D_x$ を $\bmod\ 998244353$ で出力する。

## 制約

- $1 \leq N \leq 2\times10^5$
- $1 \leq Q \leq 2\times10^5$
- $0 \leq A_i \leq 10^9$
- $1 \leq x \leq N$
- $0 \leq v \leq 10^9$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。ここで ${\rm query}_i$ は $i$ 番目に処理するクエリである。

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> ${\rm query}_1$
> 
> ${\rm query}_2$
> 
> $\vdots$
> 
> ${\rm query}_Q$

各クエリは以下の $2$ 種類のいずれかの形式で与えられる。

> $1$ $x$ $v$
> $2$ $x$

## 出力

クエリへの答えを改行区切りで出力せよ。  

```input1
3 3
1 2 3
2 3
1 2 0
2 3
```

```output1
15
9
```

$1$ 番目のクエリの時点で $A=(1,2,3)$ であるため、$B=(1,3,6)$、$C=(1,4,10)$、$D=(1,5,15)$ となり、$D_3=15$ です。

$3$ 番目のクエリの時点で $A=(1,0,3)$ であるため、$B=(1,1,4)$、$C=(1,2,6)$、$D=(1,3,9)$ となり、$D_3=9$ です。

```input2
2 1
998244353 998244353
2 1
```

```output2
0
```