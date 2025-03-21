配点 : $450$ 点

## 問題文

$N$ 個の餅が小さいほうから順に並んでいます。
$i$ 番目 $(1\leq i\leq N)$ の餅の大きさは $A _ i$ です。

$2$ つの餅 $A,B$ の大きさをそれぞれ $a,b$ としたとき、$a$ が $b$ の半分以下であるとき、かつそのときに限り、餅 $A$ を餅 $B$ の上に乗せて鏡餅を $1$ つ作ることができます。

同時にいくつの鏡餅を作ることができるか求めてください。

より厳密には、以下ができるような最大の非負整数 $K$ を求めてください。

- $N$ 個の餅から $2K$ 個の餅を選んで $K$ 個の $2$ つ組に分け、それぞれの組について一方をもう一方の上に乗せることで鏡餅を $K$ 個作る。

## 制約

- $2\leq N\leq 5\times 10 ^ 5$
- $1\leq A _ i\leq 10 ^ 9\ (1\leq i\leq N)$
- $A _ i\leq A _ {i+1}\ (1\leq i\lt N)$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A _ 1$ $A _ 2$ $\dotsc$ $A _ N$

## 出力

同時に $K$ 個鏡餅を作れるような最大の $K$ を出力せよ。

```input1
6
2 3 4 4 7 10
```

```output1
3
```

与えられた餅の大きさは以下のようになっています。

![](https://img.atcoder.jp/abc388/29024766d11c2d88b06c92b2081129f5.png)

このとき、以下の $3$ つの鏡餅を同時に作ることができます。

![](https://img.atcoder.jp/abc388/26686710916fe3623058f6000669e049.png)

$6$ つの餅から $4$ つ以上の鏡餅を作ることはできないので、`3` を出力してください。

```input2
3
387 388 389
```

```output2
0
```

鏡餅を $1$ つも作ることができない場合もあります。

```input3
24
307 321 330 339 349 392 422 430 477 481 488 537 541 571 575 602 614 660 669 678 712 723 785 792
```

```output3
6
```