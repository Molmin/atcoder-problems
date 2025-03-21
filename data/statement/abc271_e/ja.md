配点 : $500$ 点

## 問題文

$1, \dots, N$ と番号づけられた $N$ 個の都市と、$1, \dots, M$ と番号づけられた $M$ 本の道があります。<br>
全ての道は一方通行であり、道 $i \, (1 \leq i \leq M)$ を通ると、都市 $A_i$ から都市 $B_i$ へ移動することができます。また、道 $i$ の長さは $C_i$ です。

$1$ 以上 $M$ 以下の整数からなる長さ $K$ の数列 $E = (E_1, \dots, E_K)$ が与えられます。都市 $1$ から都市 $N$ までいくつかの道を使って移動する方法であって、以下の条件を満たすものを**良い経路**と呼びます。

- 通る道の番号を通った順番に並べた列は、$E$ の部分列である。

なお、部分列とは、数列から $0$ 個以上の要素を削除し、残った要素を元の順序で並べて得られる数列のことを指します。

全ての良い経路における、通る道の長さの合計の最小値を求めてください。<br>
ただし、良い経路が存在しない場合は、そのことを報告してください。

## 制約

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M, K \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq N, A_i \neq B_i \, (1 \leq i \leq M)$
- $1 \leq C_i \leq 10^9 \, (1 \leq i \leq M)$
- $1 \leq E_i \leq M \, (1 \leq i \leq K)$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$
> 
> $A_1$ $B_1$ $C_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$
> 
> $E_1$ $\ldots$ $E_K$

## 出力

全ての良い経路における、通る道の長さの合計の最小値を出力せよ。ただし、良い経路が存在しないならば、$-1$ を出力せよ。

```input1
3 4 4
1 2 2
2 3 2
1 3 3
1 3 5
4 2 1 2
```

```output1
4
```

良い経路として考えられるのは次の二つです。

- 道 $4$ を使う。通る道の長さの合計は $5$ である。
- 道 $1, 2$ をこの順で使う。通る道の長さの合計は $2 + 2 = 4$ である。

よって、求める最小値は $4$ です。

```input2
3 2 3
1 2 1
2 3 1
2 1 1
```

```output2
-1
```

良い経路は存在しません。

```input3
4 4 5
3 2 2
1 3 5
2 4 7
3 4 10
2 4 1 4 3
```

```output3
14
```