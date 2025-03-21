配点 : $600$ 点

## 問題文

$T$ 個のテストケースについて、以下の問題を解いてください。  

深さ $D$ の完全 $K$ 分木 ( $1+K+K^2+\dots+K^D$ 頂点 ) があります。<br>
あなたの目標はこの木の辺を何本か切って、連結成分のうちいずれかを $X$ 頂点にすることです。<br>
目標を達成するために切るべき辺の数の最小値を求めてください。

## 制約

- 入力は全て整数
- $1 \le T \le 100$
- $1 \le D$
- $2 \le K$
- $\displaystyle 1 \le X \le \sum_{i=0}^{D} K^i \le 10^{18}$

## 入力

入力は以下の形式で標準入力から与えられる。  

> $T$
> 
> $case_1$
> 
> $\vdots$
> 
> $case_T$

但し、 $case_i$ は $i$ 個目のテストケースである。<br>
各テストケースは以下の形式である。

> $D$ $K$ $X$

## 出力

全体で $T$ 行出力せよ。<br>
そのうち $i$ 行目には $i$ 個目のテストケースに対する答えを整数として出力せよ。

```input1
11
2 2 1
2 2 2
2 2 3
2 2 4
2 2 5
2 2 6
2 2 7
1 999999999999999999 1
1 999999999999999999 2
1 999999999999999999 999999999999999999
1 999999999999999999 1000000000000000000
```

```output1
1
2
1
1
2
1
0
1
999999999999999998
1
0
```