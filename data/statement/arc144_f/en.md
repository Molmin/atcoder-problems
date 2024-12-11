Score : $900$ points

## Problem Statement

You are given a positive integer $m$, a non-negative integer $a$ ($0\leq a &lt; m$), and a sequence of positive integers $A = (A_1, \ldots, A_N)$.

A set $X$ of positive integers is defined as $X = \{x &gt; 0\mid x\equiv a \pmod{m}\}$.

Alice and Bob will play a game against each other. They will alternate turns performing the following operation, with Alice going first:

- Choose a pair $(i,x)$ of an index $i$ ($1\leq i\leq N$) and a positite integer $x\in X$ such that $x\leq A_i$. Change $A_i$ to $A_i - x$. If there is no such $(i, x)$, the current player loses and the game ends.

Find the number, modulo $998244353$, of pairs $(i, x)$ that Alice can choose in her first turn so that she wins if both players play optimally in subsequent turns.

## Constraints

- $1\leq N\leq 3\times 10^5$
- $0\leq a &lt; m\leq 10^9$
- $\max(1, a) \leq A_i\leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$ $m$ $a$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number, modulo $998244353$, of pairs $(i, x)$ that Alice can choose in her first turn so that she wins if both players play optimally in subsequent turns.

```input1
3 1 0
5 6 7
```

```output1
3
```

We have $X = \{1, 2, 3, 4, 5, \ldots\}$. Three pairs $(i,x)$ satisfy the condition: $(1,4)$, $(2,4)$, $(3,4)$.

```input2
5 10 3
5 9 18 23 27
```

```output2
3
```

We have $X = \{3, 13, 23, 33, 43, \ldots\}$. Three pairs $(i,x)$ satisfy the condition: $(4,23)$, $(5,3)$, $(5,13)$.

```input3
4 10 8
100 101 102 103
```

```output3
0
```

Alice cannot win even if she plays optimally. Thus, zero pairs $(i,x)$ satisfy the condition.

```input4
5 2 1
111111111111111 222222222222222 333333333333333 444444444444444 555555555555555
```

```output4
943937640
```

$833333333333334$ pairs $(i,x)$ satisfy the condition. Print the count modulo $998244353$.