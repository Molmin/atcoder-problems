Score : $600$ points

## Problem Statement

You are given an integer $N$ and a set $S=\lbrace S_1,S_2,\ldots,S_K\rbrace$ consisting of integers between $1$ and $N-1$.

Find the number, modulo $998244353$, of trees $T$ with $N$ vertices numbered $1$ through $N$ such that:

- $d_i\in S$ for all $i\ (1\leq i \leq N)$, where $d_i$ is the degree of vertex $i$ in $T$.

## Constraints

- $2\leq N \leq 2\times 10^5$
- $1\leq K \leq N-1$
- $1\leq S_1 &lt; S_2 &lt; \ldots &lt; S_K \leq N-1$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S_1$ $\ldots$ $S_K$

## Output

Print the number, modulo $998244353$, of the conforming trees $T$.

```input1
4 2
1 3
```

```output1
4
```

A tree satisfies the condition if the degree of one vertex is $3$ and the others' are $1$.  Thus, the answer is $4$.

```input2
10 5
1 2 3 5 6
```

```output2
68521950
```

```input3
100 5
1 2 3 14 15
```

```output3
888770956
```

Print the count modulo $998244353$.