配点 : $500$ 点

## 問題文

$2^N-1$ 頂点からなる木があります。<br>
頂点には $1$ から $2^N-1$ の番号がつけられており、各 $1\leq i &lt; 2^{N-1}$ について、

- 頂点 $i$ と頂点 $2i$ を結ぶ無向辺
- 頂点 $i$ と頂点 $2i+1$ を結ぶ無向辺

が存在します。これら以外の辺はありません。

$2$ 頂点間の距離を、その $2$ 頂点を結ぶ単純パスに含まれる辺の個数とします。

頂点の組 $(i,j)$ であって、距離が $D$ であるようなものの個数を $998244353$ で割った余りを求めてください。

## 制約

- $2 \leq N \leq 10^6$
- $1 \leq D \leq 2\times 10^6$
- 入力に含まれる値は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $D$

## 出力

答えを出力せよ。  

```input1
3 2
```

```output1
14
```

与えられる木は以下の図のようなものです。

![図](https://img.atcoder.jp/ghi/86d098048a50638decb39ed6659d32cf.png)

距離が $2$ であるような頂点の組は $(1,4),(1,5),(1,6),(1,7),(2,3),(3,2),(4,1),(4,5),(5,1),(5,4),(6,1),(6,7),(7,1),(7,6)$ の $14$ 組存在します。

```input2
14142 17320
```

```output2
11284501
```