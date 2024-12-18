配点 : $300$ 点

## 問題文

自己ループと二重辺を含まない $N$ 頂点 $M$ 辺の重み無し無向グラフが与えられます。<br>
$i (1 \leq i \leq M)$ 番目の辺は頂点 $a_i$ と頂点 $b_i$ を結びます。 <br>
ここで、自己ループは $a_i = b_i (1 \leq i \leq M)$ となる辺のことを表します。 <br>
また、二重辺は $a_i=a_j$ かつ $b_i=b_j (1 \leq i&lt;j \leq M)$ となる辺のことを表します。 <br>
頂点 $1$ を始点として、全ての頂点を1度だけ訪れるパスは何通りありますか。 <br>
ただし、パスの始点と終点の頂点も訪れたものとみなします。   

例として、図1のような無向グラフが与えられたとします。

![](https://atcoder.jp/img/5013/888b2f55d46f66125a4ac25cd8cfc19a.png)

図1：無向グラフの例

このとき、図2で表されるパスは条件を満たします。 <br>

![](https://atcoder.jp/img/5013/694eda4639f3f4608c9f0b38af1633d3.png)

図2：条件を満たすパスの例

しかし、図3で表されるパスは条件を満たしません。全ての頂点を訪れていないからです。 <br>

![](https://atcoder.jp/img/5013/4739baf6665ab2832ea424b1cc404ee1.png)

図3：条件を満たさないパスの例1

また、図4で表されるパスも条件を満たしません。始点が頂点 $1$ ではないからです。 <br>

![](https://atcoder.jp/img/5013/7ad401c30e069a98a34c8cfec70ec278.png)

図4：条件を満たさないパスの例2

## 制約

- $2 \leq N \leq 8$
- $0 \leq M \leq N(N-1)/2$
- $1 \leq a_i&lt;b_i \leq N$
- 与えられるグラフは自己ループと二重辺を含まない。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$  
> 
> $a_1$ $b_1$  
> 
> $a_2$ $b_2$
> 
> $:$  
> 
> $a_M$ $b_M$

## 出力

問題文の条件を満たすパスが何通りあるか出力せよ。

```input1
3 3
1 2
1 3
2 3
```

```output1
2
```

与えられるグラフは以下の図で表されます。

![43c0ac53de20d989d100bf60b3cd05fa.png](https://atcoder.jp/img/5013/43c0ac53de20d989d100bf60b3cd05fa.png)

条件を満たすパスは以下の $2$ 通りです。

![c4a27b591d364fa479314e3261b85071.png](https://atcoder.jp/img/5013/c4a27b591d364fa479314e3261b85071.png)

```input2
7 7
1 3
2 7
3 4
4 5
4 6
5 6
6 7
```

```output2
1
```

このテストケースは問題文の例と同じです。