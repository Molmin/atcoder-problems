配点 : $500$ 点

## 問題文

$N$ 個の整数からなる数列 $A = \{ A_1, A_2, \cdots, A_N \}$ が与えられます。
$N$ 個それぞれの整数に対して、色を $1$ つ選んでその色を塗ります。
この時、以下の条件を満たす必要があります:

- $A_i$ と $A_j (i &lt; j)$ が同じ色で塗られているならば $A_i &lt; A_j$ が成立する

条件を満たすように色を塗る時、用いる色の数の最小値を求めてください。

## 制約

- $1 \leq N \leq 10^5$
- $0 \leq A_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## 出力

条件を満たすように色を塗る時、用いる色の数の最小値を出力せよ。

```input1
5
2
1
4
5
3
```

```output1
2
```

例えば、$2, 3$ を赤色、$1, 4, 5$ を青色で塗れば $2$ 色で条件を満たす塗り方が出来ます。

```input2
4
0
0
0
0
```

```output2
4
```

全ての整数を異なる色で塗るしかありません。