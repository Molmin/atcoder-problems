Score : $1800$ points

## Problem Statement

You are given positive integers $N$ and $K$. Consider an undirected tree $T$ with $(2K + 1)N + 1$ vertices labeled from $1$ to $(2K + 1)N + 1$. Among all such trees, find the number, modulo $998244353$, of trees that satisfy the following condition.

- It is possible to remove all edges from $T$ by repeating the following operation:-   - Choose a path of length $2K + 1$ and remove all edges in it.&lt;br&gt;
Formally, choose a sequence of distinct vertices $v_0, v_1, \dots, v_{2K+1}$ such that there exists an edge $(v_i, v_{i+1})$ for all $i$ such that $0 \leq i \leq 2K$, and remove the edge $(v_i, v_{i+1})$ for all $i$ such that $0 \leq i \leq 2K$.

## Constraints

- $1 \leq N \leq 1.3 \times 10^5$
- $1 \leq K \leq 50$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number, modulo $998244353$, of trees with $(2K + 1)N + 1$ vertices satisfying the condition.

```input1
2 1
```

```output1
8820
```

For example, consider a tree with edges $(1, 2)$, $(2, 3)$, $(2, 4)$, $(2, 6)$, $(3, 7)$, and $(4, 5)$. By doing the following steps, one can remove all edges from the tree, so it satisfies the condition in the problem statement:

- Choose the path $(1,2,4,5)$ and remove edges $(1,2)$, $(2,4)$, $(4,5)$.
- Choose the path $(6,2,3,7)$ and remove edges $(6,2)$, $(2,3)$, $(3,7)$.

![image](https://img.atcoder.jp/agc070/97f1043f2e834a849e1e3d10921cfb9b.png)

There are $8820$ such trees in total.

```input2
70 1
```

```output2
273892456
```

Remember to print the count modulo $998244353$.

```input3
12 29
```

```output3
898069699
```

```input4
100000 50
```

```output4
158600909
```