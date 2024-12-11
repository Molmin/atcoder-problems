配点 : $600$ 点

## 問題文

$N$ 頂点の木が与えられます。頂点には $1,2,\ldots ,N$ の番号がついており、$i\,(1 \leq i \leq N-1)$ 本目の辺は頂点 $u_i$ と頂点 $v_i$ を結んでいます。

以下の条件を満たす整数 $i\,(1 \leq i \leq N)$ の個数を求めてください。

- 元の木から頂点 $i$ およびそれに接続する全ての辺を削除して得られるグラフの最大マッチングの大きさが、元の木の最大マッチングの大きさに等しい。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq u_i &lt; v_i \leq N$
- 与えられるグラフは木
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## 出力

答えを出力せよ。

```input1
3
1 2
2 3
```

```output1
2
```

元の木の最大マッチングの大きさは $1$ です。

頂点 $1$ およびそれに接続する全ての辺を削除して得られるグラフの最大マッチングの大きさは $1$、

頂点 $2$ およびそれに接続する全ての辺を削除して得られるグラフの最大マッチングの大きさは $0$、

頂点 $3$ およびそれに接続する全ての辺を削除して得られるグラフの最大マッチングの大きさは $1$

です。$i=1,3$ の $2$ つが条件を満たすので、$2$ を出力します。

```input2
2
1 2
```

```output2
0
```

```input3
6
2 5
3 5
1 4
4 5
4 6
```

```output3
4
```