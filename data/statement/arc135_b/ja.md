配点 : $500$ 点

## 問題文

項数 $N$ の整数列 $S = (S_1, \ldots, S_N)$ が与えられます。
項数 $N+2$ の整数列 $A = (A_1, \ldots, A_{N+2})$ であって、次の条件を満たすものが存在するか否かを判定してください。

- 任意の $i$ ($1\leq i\leq N+2$) に対して $0\leq A_i$ が成り立つ。
- 任意の $i$ ($1\leq i\leq N$) に対して、$S_i = A_{i} + A_{i+1} + A_{i+2}$ が成り立つ。

存在する場合には、そのようなものをひとつ出力してください。

## 制約

- $1\leq N\leq 3\times 10^5$
- $0\leq S_i\leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられます。

> $N$
> 
> $S_1$ $\ldots$ $S_N$

## 出力

問題の条件を満たす整数列 $A$ が存在するならば `Yes` を、そうでなければ `No` を出力してください。
`Yes` の場合には、$2$ 行目にそのような整数列 $A$ の各要素を、空白で区切って $1$ 行で出力してください。

> $A_1$ $\ldots$ $A_{N+2}$

条件を満たす整数列が複数存在する場合は、どれを出力しても正解となります。

```input1
5
6 9 6 6 5
```

```output1
Yes
0 4 2 3 1 2 2
```

以下のように、任意の $i$ ($1\leq i\leq N$) に対して $S_i = A_i + A_{i+1} + A_{i+2}$ が成り立つことが確認できます。

- $6 = 0 + 4 + 2$。
- $9 = 4 + 2 + 3$。
- $6 = 2 + 3 + 1$。
- $6 = 3 + 1 + 2$。
- $5 = 1 + 2 + 2$。

```input2
5
0 1 2 1 0
```

```output2
No
```

```input3
1
10
```

```output3
Yes
0 0 10
```