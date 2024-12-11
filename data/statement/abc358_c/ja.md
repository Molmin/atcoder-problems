配点 : $300$ 点

## 問題文

AtCoder Land には $1$ から $N$ までの番号が付けられた $N$ 個のポップコーン売り場があります。
売られているポップコーンの味には味 $1,2,\dots,M$ の $M$ 種類がありますが、すべての売り場ですべての味のポップコーンを売っているわけではありません。

高橋君は、それぞれのポップコーン売り場でどの味のポップコーンを売っているかの情報を入手しました。
この情報は $N$ 個の長さ $M$ の文字列 $S_1,S_2,\dots,S_N$ によって表され、$S_i$ の $j$ 文字目が `o` であるとき売り場 $i$ が味 $j$ のポップコーンを売っていることを、 
`x` であるとき売っていないことを示します。
どの売り場も最低 $1$ 種類の味のポップコーンを売っており、どの味のポップコーンも最低 $1$ つの売り場で売られています。

高橋君は全種類のポップコーンを食べたがっていますが、あまり何度も移動はしたくありません。
高橋君がすべての味のポップコーンを購入するためには最低何個の売り場を訪れる必要があるか求めてください。

## 制約

- $N,M$ は整数
- $1\leq N,M \leq 10$
- $S_i$ は `o` および `x` からなる長さ $M$ の文字列
- すべての $i\ (1\leq i\leq N)$ について、$S_i$ の中には `o` が $1$ つ以上存在する
- すべての $j\ (1\leq j\leq M)$ について、$S_i$ の $j$ 文字目が `o` であるような $i$ が $1$ つ以上存在する

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## 出力

高橋君がすべての味のポップコーンを購入するために訪れる必要がある売り場の個数の最小値を出力せよ。

```input1
3 5
oooxx
xooox
xxooo
```

```output1
2
```

$1$ つめの売り場と $3$ つめの売り場を訪れることで、すべての味のポップコーンを購入することができます。
$1$ つの売り場ですべての味のポップコーンを購入することはできないので、答えは $2$ です。

```input2
3 2
oo
ox
xo
```

```output2
1
```

```input3
8 6
xxoxxo
xxoxxx
xoxxxx
xxxoxx
xxoooo
xxxxox
xoxxox
oxoxxo
```

```output3
3
```