配点 : $1000$ 点

## 問題文

長さ $L$ の橋の上にサーバルが $N$ 匹います。

$i$ 匹目のサーバルは橋の左から $A_{i}$ の位置にいます。

ここで、 $0 &lt; A_{1} &lt; A_{2} &lt; \cdots &lt; A_{N} &lt; L$ が成り立ちます。

$i = 1, 2, \dots , N$ について、以下の問いに答えてください。

サーバルたちは以下の $3$ つの行動を順番に行います。

- 行動 $1$ : $i$ 匹目のサーバルを除く $N - 1$ 匹のサーバルが左右のいずれかの方を向く。
- 行動 $2$ : $i$ 匹目のサーバルが左右いずれかの方を向く。
- 行動 $3$ : 全てのサーバルが一斉に動き出す。全てのサーバルは常に $1$ 単位時間につきちょうど $1$ の距離を進む速さで動く。サーバルが橋の端に辿り着いたら、橋の上から去ってしまう。 $2$ 匹のサーバルがぶつかると、どちらのサーバルも進む向きを反転して動き続ける。

$i$ 匹目のサーバルは賢く、この橋のことが好きなので、行動 $2$ で方向を選ぶとき、他の $N-1$ 匹の向いている方を見て、行動 $3$ の際により長く橋の上にいられる方を選ぶとします。
行動 $1$ で $N-1$ 匹のサーバルが向いている方の組み合わせは $2^{N-1}$ 通りありますが、その全てにおける、$i$ 匹目のサーバルが橋の上にいられる時間の総和を $998244353$ で割ったあまりを求めてください。なお、出力すべき値は整数になることが証明できます。

## 制約

- $1\leq N\leq 10^{5}$
- $0 &lt; A_{1} &lt; A_{2} &lt; \cdots &lt; A_{N} &lt; L \leq 10^{9}$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$ $L$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{N}$

## 出力

$N$ 行出力してください。$k$ 行目には $i=k$ としたときの答えを出力してください。

```input1
2 167
9 24
```

```output1
182
301
```

$i = 1$ のときは、常に右を向くのが最適です。

$i = 2$ のときは、$1$ 匹目のサーバルと反対の方を向くのが最適です。

```input2
1 924
167
```

```output2
757
```

```input3
10 924924167
46001560 235529797 272749755 301863061 359726177 470023587 667800476 696193062 741860924 809211293
```

```output3
112048251
409175578
167800512
997730745
278651538
581491882
884751575
570877705
747965896
80750577
```