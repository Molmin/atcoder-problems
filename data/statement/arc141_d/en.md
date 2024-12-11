Score : $700$ points

## Problem Statement

We say that a set $S$ of positive integers is *good* when, for any $a,\ b \in S\ (a\neq b)$, $b$ is not a multiple of $a$.

You are given a set of $N$ integers between $1$ and $2M$ (inclusive): $S=\lbrace A_1,\ A_2,\ \dots,\ A_N\rbrace$.

For each $i=1,\ 2,\ \dots,\ N$, determine whether there exists a good set with $M$ elements that is a subset of $S$ containing $A_i$.

## Constraints

- $M \leq N \leq 2M$
- $1 \leq M \leq 3 \times 10^5$
- $1 \leq A_1 &lt; A_2 &lt; \dots &lt; A_N \leq 2M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_{N}$

## Output

Print $N$ lines. The $i$-th line should contain `Yes` if there exists a good set with $M$ elements that is a subset of $S$ containing $A_i$, and `No` otherwise.

```input1
5 3
1 2 3 4 5
```

```output1
No
Yes
Yes
Yes
Yes
```

Trivially, the only good set containing $A_1=1$ is $\lbrace 1\rbrace$, which has just one element, so the answer for $i=1$ is `No`.

There is a good set $\lbrace 2,\ 3,\ 5\rbrace$ containing $A_2=2$, so the answer for $i=2$ is `Yes`.

```input2
4 4
2 4 6 8
```

```output2
No
No
No
No
```

```input3
13 10
2 3 4 6 7 9 10 11 13 15 17 19 20
```

```output3
No
No
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Yes
Yes
No
```