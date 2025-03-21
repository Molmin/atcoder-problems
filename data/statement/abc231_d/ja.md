配点 : $400$ 点

## 問題文

$1$ から $N$ の番号がついた $N$ 人を横一列に並べる方法のうち、以下の形式の $M$ 個の条件全てを満たすものが存在するか判定してください。

- 条件：人 $A_i$ と人 $B_i$ は隣り合っている

## 制約

- $2 \leq N \leq 10^5$
- $0 \leq M \leq 10^5$
- $1\leq A_i &lt; B_i \leq N$
- $(A_i,B_i)$ は相異なる

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## 出力

条件を満たす並べ方が存在するなら `Yes`、存在しないなら `No` と出力せよ。

```input1
4 2
1 3
2 3
```

```output1
Yes
```

例えば $4,1,3,2$ の順に並べることで全ての条件を満たすことができます。

```input2
4 3
1 4
2 4
3 4
```

```output2
No
```

どのように並べても全ての条件を満たすことはできません。