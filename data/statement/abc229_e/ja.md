配点 : $500$ 点

## 問題文

$N$ 頂点 $M$ 辺の単純な無向グラフが与えられます。<br>
辺 $i$ は、頂点 $A_i$ と $B_i$ を結んでいます。  

頂点 $1,2,\ldots,N$ を順番に消していきます。<br>
なお、頂点 $i$ を消すとは、頂点 $i$ と、頂点 $i$ に接続する全ての辺をグラフから削除することです。  

$i=1,2,\ldots,N$ について、頂点 $i$ まで消した時にグラフはいくつの連結成分に分かれていますか？  

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq \min(\frac{N(N-1)}{2} , 2 \times 10^5 )$
- $1 \leq A_i \lt B_i \leq N$
- $i \neq j$ ならば $(A_i,B_i) \neq (A_j,B_j)$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## 出力

$N$ 行出力せよ。<br>
$i$ 行目には、頂点 $i$ まで消した時のグラフの連結成分の数を出力せよ。  

```input1
6 7
1 2
1 4
1 5
2 4
2 3
3 5
3 6
```

```output1
1
2
3
2
1
0
```

![](https://img.atcoder.jp/ghi/3320212a9093132a80105bf02feeb195.png)<br>
グラフは上図のように変化していきます。

```input2
8 7
7 8
3 4
5 6
5 7
5 8
6 7
6 8
```

```output2
3
2
2
1
1
1
1
0
```

はじめからグラフが非連結なこともあります。