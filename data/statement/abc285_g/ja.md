配点 : $600$ 点

## 問題文

縦 $H$ マス、横 $W$ マスのグリッドがあります。上から $i$ 行目、左から $j$ 列目のマスをマス $(i,j)$ と呼びます。

このグリッドを縦 $1$ マス $\times$ 横 $1$ マスのタイルと縦 $1$ マス $\times$ 横 $2$ マスのタイルで、重ならないように、隙間ができないように覆います（タイルは回転してもよい）。

各マスには `1`, `2`, `?` のいずれかが書かれています。マス $(i,j)$ に書かれている文字は $c_{i,j}$ です。<br>
`1` が書かれたマスは $1\times 1$ のタイルで、`2` が書かれたマスは $1\times 2$ のタイルで覆わなければなりません。`?` が書かれたマスはどちらのタイルで覆っても構いません。

そのようなタイルの置き方があるかどうか判定してください。

## 制約

- $1 \leq H,W \leq 300$
- $H,W$ は整数
- $c_{i,j}$ は `1`, `2`, `?` のいずれか

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $c_{1,1}c_{1,2}\ldots c_{1,W}$
> 
> $\vdots$
> 
> $c_{H,1}c_{H,2}\ldots c_{H,W}$

## 出力

問題文中の条件を満たすタイルの置き方が存在するなら `Yes`、存在しないなら `No` と出力せよ。

```input1
3 4
2221
?1??
2?21
```

```output1
Yes
```

例えば以下のようなタイルの置き方で条件を満たすことができます。

![](https://img.atcoder.jp/abc285/d984ec33355bac05ecebc41076d9a8df.png)

```input2
3 4
2?21
??1?
2?21
```

```output2
No
```

条件を満たすようなタイルの置き方は存在しません。

```input3
5 5
11111
11111
11211
11111
11111
```

```output3
No
```