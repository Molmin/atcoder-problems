配点 : $500$ 点

## 問題文

$N$ 頂点からなる木が与えられます。$i$ 番目の辺は頂点 $A_i$ と頂点 $B_i$ をつないでいます。頂点 $i$ は色 $C_i$ で塗られています (この問題では、色は整数として表されます)。

頂点 $1$ から頂点 $x$ への最短パスに、頂点 $x$ と同じ色で塗られた頂点が頂点 $x$ 以外に存在しないとき、頂点 $x$ は **よい頂点** であるといいます。

よい頂点を全て求めてください。

## 制約

- $2 \leq N \leq 10^5$
- $1 \leq C_i \leq 10^5$
- $1 \leq A_i,B_i \leq N$
- 与えられるグラフは木である
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $C_1$ $\ldots$ $C_N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## 出力

全てのよい頂点の番号を、昇順に改行区切りで出力せよ。

```input1
6
2 7 1 8 2 8
1 2
3 6
3 2
4 3
2 5
```

```output1
1
2
3
4
6
```

例えば頂点 $1$ から頂点 $6$ への最短パスには頂点 $1,2,3,6$ が含まれます。これらの中に、頂点 $6$ と同じ色の頂点は頂点 $6$ 以外存在しないので、頂点 $6$ はよい頂点です。<br>
一方で、頂点 $1$ から頂点 $5$ への最短パスには頂点 $1, 2, 5$ が含まれ、頂点 $1$ と頂点 $5$ の色は同じであるため、頂点 $5$ はよい頂点ではありません。  

```input2
10
3 1 4 1 5 9 2 6 5 3
1 2
2 3
3 4
4 5
5 6
6 7
7 8
8 9
9 10
```

```output2
1
2
3
5
6
7
8
```