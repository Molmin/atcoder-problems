Score : $500$ points

## Problem Statement

You are given a multiset of positive integers with $N$ elements: $A=\lbrace A_1,A_2,\dots,A_N \rbrace$.

You may repeat the following operation any number of times (possibly zero).

- Choose a positive integer $x$ that occurs at least twice in $A$. Delete two occurrences of $x$ from $A$, and add one occurrence of $x+1$ to $A$.

Find the number, modulo $998244353$, of multisets that $A$ can be in the end.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 2 \times 10^5$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4
1 1 2 4
```

```output1
3
```

$A$ can be one of the three multisets $\lbrace 1,1,2,4 \rbrace,\lbrace 2,2,4 \rbrace,\lbrace 3,4 \rbrace$ in the end.

You can make $A = \lbrace 3,4 \rbrace$ as follows.

- Choose $x = 1$. Delete two $1$s from $A$ and add one $2$ to $A$, making $A=\lbrace 2,2,4 \rbrace$.
- Choose $x = 2$. Delete two $2$s from $A$ and add one $3$ to $A$, making $A=\lbrace 3,4 \rbrace$.

```input2
5
1 2 3 4 5
```

```output2
1
```

```input3
13
3 1 4 1 5 9 2 6 5 3 5 8 9
```

```output3
66
```