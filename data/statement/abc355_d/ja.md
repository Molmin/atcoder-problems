配点 : $400$ 点

## 問題文

$N$ 個の実数の区間が与えられます。$i\,(1 \leq i \leq N)$ 番目の区間は $[l_i,r_i]$ です。$i$ 番目の区間と $j$ 番目の区間が共通部分を持つような組 $(i,j)\,(1\leq i &lt; j \leq N)$ の個数を求めてください。

## 制約

- $2 \leq N \leq 5 \times 10^5$
- $0 \leq l_i &lt; r_i \leq 10^9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_N$ $r_N$

## 出力

答えを出力せよ。

```input1
3
1 5
7 8
3 7
```

```output1
2
```

与えられた区間は $[1,5], [7,8], [3,7]$ です。このうち，$1$ 番目と $3$ 番目、 $2$ 番目と $3$ 番目の区間が共通部分を持つため、答えは $2$ です。

```input2
3
3 4
2 5
1 6
```

```output2
3
```

```input3
2
1 2
3 4
```

```output3
0
```