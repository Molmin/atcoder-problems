配点 : $500$ 点

## 問題文

AtCoder国には $1$ から $N$ の番号がついた $N$ 個の街と $1$ から $N-1$ の番号がついた $N-1$ 本の道路があります。

道路 $i$ は街 $A_i$ と街 $B_i$ を双方向に結び、長さは $C_i$ です。どの街同士も、いくつかの道路を通って互いに行き来することができます。

いずれかの街を出発し、道路による移動で全ての街を $1$ 度以上訪れるための移動距離の最小値を求めてください。

## 制約

- $2 \leq N \leq 2\times 10^5$
- $1 \leq A_i,B_i \leq N$
- $1 \leq C_i \leq 10^9$
- 入力は全て整数である
- どの街同士も、いくつかの道路を通って互いに行き来できる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $B_1$ $C_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$ $C_{N-1}$

## 出力

答えを出力せよ。  

```input1
4
1 2 2
1 3 3
1 4 4
```

```output1
11
```

$4 \to 1 \to 2 \to 1 \to 3$ と移動すると移動距離の合計は $11$ となり、これが最小値です。

最初の街に戻ってくる必要はないことに注意してください。

```input2
10
10 9 1000000000
9 8 1000000000
8 7 1000000000
7 6 1000000000
6 5 1000000000
5 4 1000000000
4 3 1000000000
3 2 1000000000
2 1 1000000000
```

```output2
9000000000
```

オーバーフローに注意してください。