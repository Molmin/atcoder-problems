配点 : $500$ 点

## 問題文

$1$ 以上 $M$ 以下の整数からなる長さ $N$ の数列 $A_1,A_2,\cdots, A_{N}$ と $B_1,B_2,\cdots, B_{N}$ の組であって、以下の条件をすべて満たすものの個数を求めてください。

- $1\leq i\leq N$ なる任意の $i$ について $A_i \neq B_i$
- $1\leq i &lt; j\leq N$ なる任意の $(i,j)$ について $A_i \neq A_j$ かつ $B_i \neq B_j$

ただし、答えは非常に大きくなる可能性があるので、$(10^9+7)$ で割ったあまりを出力してください。

## 制約

- $1\leq N \leq M \leq 5\times10^5$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$

## 出力

答えを $(10^9+7)$ で割ったあまりを出力せよ。

```input1
2 2
```

```output1
2
```

$A_1=1,A_2=2,B_1=2,B_2=1$ のときと $A_1=2,A_2=1,B_1=1,B_2=2$ のとき条件が満たされます。

```input2
2 3
```

```output2
18
```

```input3
141421 356237
```

```output3
881613484
```