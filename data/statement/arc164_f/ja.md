配点 : $900$ 点

## 問題文

頂点に $1$ から $N$ までの番号がついており、頂点 $1$ を根とする $N$ 頂点の根付き木が与えられます。
この木の頂点 $i$ の親は頂点 $p_i$ です（$2\leq i\leq N$）。

Alice と Bob は、この木を使って、次のようなゲームを行います。

- Alice が先手、Bob が後手で、表裏を白と黒に塗り分けた石を使い、交互に $1$ つずつ木の頂点に石を置いていく。この際、Alice は白い面を上に、Bob は黒い面を上にして置く。
- 各手番で石を置いてよいのは、その頂点自身には石が置かれておらず、子孫である頂点には全て石が置かれている頂点のみである。
- 石を置くとき、置いた頂点の子孫にある石を全て裏返す（置いた石自体は裏返さない）。

全ての頂点に石が置かれるとゲーム終了となり、この時点で白い面が上になっている石の数を Alice の得点とします。

Alice はできるだけ大きな得点を得ようとし、Bob は Alice の得点をできるだけ小さくしようとします。両者が最善の手順を取ったとき、Alice の得点はいくらでしょうか。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq p_i &lt; i$ $(2\leq i \leq N)$
- 入力される値はすべて整数である
- 与えられるグラフは木である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $p_2$ $p_3$ $\ldots$ $p_N$

## 出力

答えを整数で出力せよ。

```input1
4
1 1 2
```

```output1
2
```

与えられた木では、初めに石を置くことのできる頂点は $3,4$ のみです。ここから、例えば次のような進行が考えられます。

- Alice が頂点 $4$ に白い面を上にして石を置く。この操作の後、頂点 $2$ は子孫に全て石が置かれたので、石が置けるようになる。
- Bob が頂点 $2$ に黒い面を上にして石を置き、頂点 $4$ にある石を裏返して黒い面を上にする。
- Alice が頂点 $3$ に白い面を上にして石を置く。
- Bob が頂点 $1$ に黒い面を上にして石を置き、頂点 $2,3,4$ にある石を全て裏返す。

この場合、ゲーム終了時に頂点 $1,2,3,4$ にある石はそれぞれ黒、白、黒、白が上になっています。実は、この進行は双方の最善手の一例であり、答えは $2$ となります。

```input2
7
1 1 2 4 4 4
```

```output2
5
```