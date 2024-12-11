配点 : $2200$ 点

## 問題文

$N$ 頂点からなる木 $T$ と $N$ 頂点 $M$ 辺からなる無向グラフ $G$ が与えられます。
それぞれの各頂点には $1$ から $N$ の番号が割り振られています。
$T$ の $N-1$ 本の辺のうち、$i$ 本目の辺は頂点 $a_i$ と頂点 $b_i$ を繋いでいます。
$G$ の $M$ 本の辺のうち、$j$ 本目の辺は頂点 $c_j$ と頂点 $d_j$ を繋いでいます。

$G$ に対して以下の操作を繰り返し行うことで、$G$ に辺を追加することを考えます。

- $3$ つの整数 $a$,$b$,$c$ であって、$G$ の頂点 $ab$ 間と $bc$ 間に辺があり、$ac$ 間に辺がないようなものを選ぶ。
  $T$ のある単純パス上に頂点 $a$,$b$,$c$ が何らかの順序ですべて含まれるとき、$G$ の頂点 $ac$ 間に辺を追加する。

これ以上辺を追加することができなくなったとき、$G$ の辺の数はいくつになるか求めてください。
この数はどのように操作を行っても変わらないことが示せます。

## 制約

- $2 \leq N \leq 2000$
- $1 \leq M \leq 2000$
- $1 \leq a_i, b_i \leq N$
- $a_i \neq b_i$
- $1 \leq c_j, d_j \leq N$
- $c_j \neq d_j$
- $G$ は多重辺を含まない
- $T$ は木である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $:$
> 
> $a_{N-1}$ $b_{N-1}$
> 
> $c_1$ $d_1$
> 
> $:$
> 
> $c_M$ $d_M$

## 出力

最終的な $G$ の辺の数を出力せよ。

```input1
5 3
1 2
1 3
3 4
1 5
5 4
2 5
1 5
```

```output1
6
```

以下の順で辺を追加することで $6$ 本まで辺を増やすことができます。

- $(a,b,c)=(1,5,4)$ とし、頂点 $1$ と頂点 $4$ の間に辺を追加する。
- $(a,b,c)=(1,5,2)$ とし、頂点 $1$ と頂点 $2$ の間に辺を追加する。
- $(a,b,c)=(2,1,4)$ とし、頂点 $2$ と頂点 $4$ の間に辺を追加する。

```input2
7 5
1 5
1 4
1 7
1 2
2 6
6 3
2 5
1 3
1 6
4 6
4 7
```

```output2
11
```

```input3
13 11
6 13
1 2
5 1
8 4
9 7
12 2
10 11
1 9
13 7
13 11
8 10
3 8
4 13
8 12
4 7
2 3
5 11
1 4
2 11
8 10
3 5
6 9
4 10
```

```output3
27
```