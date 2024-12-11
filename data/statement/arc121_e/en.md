Score : $700$ points

## Problem Statement

Given is a directed tree with $N$ vertices numbered $1$ through $N$.

Vertex $1$ is the root of the tree.
For each integer $i$ such that $2 \leq i \leq N$, there is a directed edge from Vertex $p_i$ to $i$.

Let $a$ be the permutation of $(1, \ldots, N)$, and $a_i$ be the $i$-th element of $a$.

Among the $N!$ sequences that can be $a$, find the number of sequences that satisfy the following condition, modulo $998244353$.

- Condition: For every integer $i$ such that $1 \leq i \leq N$, Vertex $i$ is unreachable from Vertex $a_i$ by traversing **one or more** edges.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2000$
- $1 \leq p_i &lt; i$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_{2}$ $\cdots$ $p_N$

## Output

Print the number of sequences $a$ among the permutations of $(1, \ldots, N)$ that satisfy the condition in Problem Statement, modulo $998244353$.

```input1
4
1 1 3
```

```output1
4
```

```input2
30
1 1 3 1 5 1 1 1 8 9 7 3 11 11 15 14 4 10 11 12 1 10 13 11 7 23 8 12 18
```

```output2
746746186
```

- Remember to print the count modulo $998244353$.