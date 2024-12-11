配点 : $100$ 点

## 問題文

縦 $H$ 行、横 $W$ 列のマス目があります。

上から $i$ 行目、左から $j$ 列目には長さ $5$ の文字列 $S_{i,j}$ が書かれています。

行には上から順に $1$~$H$ の番号が、列には左から順に `A`~`Z` の番号がついています。

![](https://atcoder.jp/img/code-festival-2016-final/90cfa9fb5e04213219ccbc8d08286b4d.png)

この中から `snuke` という文字列を探し、列と行の番号を順に続けて出力してください。

例えば $6$ 行目の $8$ 列目にあった場合は、`H6` のように出力してください。

## 制約

- $1 \leq H, W \leq 26$
- $S_{i,j}$ は小文字アルファベット（`a`-`z`）のみからなる長さ $5$ の文字列である。
- 与えられる文字列のうち、ちょうど $1$ つだけが `snuke` である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $S_{1,1}$ $S_{1,2}$ $...$ $S_{1,W}$
> 
> $S_{2,1}$ $S_{2,2}$ $...$ $S_{2,W}$
> 
> $:$
> 
> $S_{H,1}$ $S_{H,2}$ $...$ $S_{H,W}$

## 出力

`snuke` という文字列が書かれているマスの列と行の番号を続けて出力せよ。

```input1
15 10
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snuke snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
snake snake snake snake snake snake snake snake snake snake
```

```output1
H6
```

```input2
1 1
snuke
```

```output2
A1
```