配点 : $600$ 点

## 問題文

整数 $A,B,C$ ( $A&lt;B&lt;C$ ) が $B-A = C-B$ を満たす時、 $(A,B,C)$ を **良い三つ組** と呼びます。<br>
$N$ 要素からなる正整数の集合 $S=\{ S_1,S_2,\dots,S_N \}$ が与えられるので、 $A,B,C \in S$ なる良い三つ組の個数を求めてください。

## 制約

- 入力は全て整数
- $1 \le N \le 10^6$
- $1 \le S_i \le 10^6$
- $S$ の要素は相異なる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$ $S_2$ $\dots$ $S_N$

## 出力

答えを整数として出力せよ。

```input1
5
8 3 1 5 2
```

```output1
3
```

$S=\{8,3,1,5,2\}$ です。数えるべき良い三つ組は以下の $3$ つです。

- $(1,2,3)$
- $(1,3,5)$
- $(2,5,8)$

```input2
7
300000 100000 499998 499999 200000 400000 500000
```

```output2
5
```

```input3
10
13 1 16 15 12 4 7 10 2 19
```

```output3
10
```