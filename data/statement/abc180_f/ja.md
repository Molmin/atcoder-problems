配点 : $600$ 点

## 問題文

頂点にラベルが付き辺にはラベルが付いていない $N$ 頂点 $M$ 辺の単純とも連結とも限らないグラフであって、以下の条件を満たすものの個数を $10^9+7$ で割ったあまりを求めてください。

- 自己ループを持たない
- すべての頂点の次数が $2$ 以下である
- 各連結成分のサイズを並べたとき、その最大値がちょうど $L$ である

## 制約

- $2 \leq N \leq 300$
- $1\leq M \leq N$
- $1 \leq L \leq N$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $L$

## 出力

答えを出力せよ。

```input1
3 2 3
```

```output1
3
```

頂点に $1$ から $N$ の番号を付けたとき、以下の $3$ 通りのグラフが条件を満たします。

- $1-2$ 間と $2-3$ 間に辺がある。
- $1-2$ 間と $1-3$ 間に辺がある。
- $1-3$ 間と $2-3$ 間に辺がある。

```input2
4 3 2
```

```output2
6
```

```input3
300 290 140
```

```output3
211917445
```