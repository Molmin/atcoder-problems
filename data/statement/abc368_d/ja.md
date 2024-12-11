配点 : $425$ 点

## 問題文

頂点に $1$ から $N$ の番号がついた $N$ 頂点の木が与えられます。$i$ 番目の辺は頂点 $A_i$ と頂点 $B_i$ を結んでいます。

このグラフからいくつかの($0$ 個でもよい)辺と頂点を削除してできる木のうち、指定された $K$ 個の頂点、頂点 $V_1,\ldots,V_K$ を全て含むようなものの頂点数の最小値を求めてください。

## 制約

- $1 \leq K \leq N \leq 2\times 10^5$
- $1 \leq A_i,B_i \leq N$
- $1 \leq V_1 &lt; V_2 &lt; \ldots &lt; V_K \leq N$
- 与えられるグラフは木である
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$
> 
> $V_1$ $\ldots$ $V_K$

## 出力

答えを出力せよ。  

```input1
7 3
1 2
1 3
2 4
2 5
3 6
3 7
1 3 5
```

```output1
4
```

与えられた木は下図左の通りであり、そこからいくつかの辺と頂点を削除してできる木のうち頂点 $1,3,5$ を全て含むような頂点数最小のものは下図右の通りです。

![図](https://img.atcoder.jp/abc368/4baf6b0adb0e12dcf8a5c812ada5c17a.png)

```input2
4 4
3 1
1 4
2 1
1 2 3 4
```

```output2
4
```

```input3
5 1
1 4
2 3
5 2
1 2
1
```

```output3
1
```