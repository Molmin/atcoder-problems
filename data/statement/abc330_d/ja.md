配点 : $400$ 点

## 問題文

$N \times N$ のマス目が与えられます。このうち上から $i$ 行目、左から $j$ 列目のマスを $(i,j)$ と書きます。<br>
各マスの状態を表す $N$ 個の長さ $N$ の文字列 $S_1,S_2,\dots,S_N$ が以下の形式で与えられます。  

- $S_i$ の $j$ 文字目が `o` であるとき、 $(i,j)$ には `o` が書かれている。
- $S_i$ の $j$ 文字目が `x` であるとき、 $(i,j)$ には `x` が書かれている。

以下の条件を全て満たすマスの三つ組の個数を求めてください。

- 組に含まれる $3$ マスは相異なる。
- $3$ マス全てに `o` が書かれている。
- マスのうち、丁度 $2$ つが同じ行にある。
- マスのうち、丁度 $2$ つが同じ列にある。

但し、ふたつの三つ組は、丁度一方に含まれるマスが存在する場合のみ区別します。

## 制約

- $N$ は $2$ 以上 $2000$ 以下の整数
- $S_i$ は長さ $N$ の `o` と `x` からなる文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

答えを整数として出力せよ。

```input1
3
ooo
oxx
xxo
```

```output1
4
```

以下の $4$ つの三つ組が条件を満たします。

- $(1,1),(1,2),(2,1)$
- $(1,1),(1,3),(2,1)$
- $(1,1),(1,3),(3,3)$
- $(1,2),(1,3),(3,3)$

```input2
4
oxxx
xoxx
xxox
xxxo
```

```output2
0
```

```input3
15
xooxxooooxxxoox
oxxoxoxxxoxoxxo
oxxoxoxxxoxoxxx
ooooxooooxxoxxx
oxxoxoxxxoxoxxx
oxxoxoxxxoxoxxo
oxxoxooooxxxoox
xxxxxxxxxxxxxxx
xooxxxooxxxooox
oxxoxoxxoxoxxxo
xxxoxxxxoxoxxoo
xooxxxooxxoxoxo
xxxoxxxxoxooxxo
oxxoxoxxoxoxxxo
xooxxxooxxxooox
```

```output3
2960
```