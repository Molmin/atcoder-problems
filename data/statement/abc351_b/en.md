Score: $150$ points

## Problem Statement

You are given two grids, each with $N$ rows and $N$ columns, referred to as grid $A$ and grid $B$.<br>
Each cell in the grids contains a lowercase English letter.<br>
The character at the $i$-th row and $j$-th column of grid $A$ is $A_{i, j}$.<br>
The character at the $i$-th row and $j$-th column of grid $B$ is $B_{i, j}$.  

The two grids differ in exactly one cell. That is, there exists exactly one pair $(i, j)$ of positive integers not greater than $N$ such that $A_{i, j} \neq B_{i, j}$. Find this $(i, j)$.

## Constraints

- $1 \leq N \leq 100$
- $A_{i, j}$ and $B_{i, j}$ are all lowercase English letters.
- There exists exactly one pair $(i, j)$ such that $A_{i, j} \neq B_{i, j}$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_{1,1}A_{1,2}\dots A_{1,N}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,N}$
> 
> $\vdots$
> 
> $A_{N,1}A_{N,2}\dots A_{N,N}$
> 
> $B_{1,1}B_{1,2}\dots B_{1,N}$
> 
> $B_{2,1}B_{2,2}\dots B_{2,N}$
> 
> $\vdots$
> 
> $B_{N,1}B_{N,2}\dots B_{N,N}$

## Output

Let $(i, j)$ be the pair of positive integers not greater than $N$ such that $A_{i, j} \neq B_{i, j}$. Print $(i, j)$ in the following format:

> $i$ $j$

```input1
3
abc
def
ghi
abc
bef
ghi
```

```output1
2 1
```

From $A_{2, 1} =$ `d` and $B_{2, 1} =$ `b`, we have $A_{2, 1} \neq B_{2, 1}$, so $(i, j) = (2, 1)$ satisfies the condition in the problem statement.

```input2
1
f
q
```

```output2
1 1
```

```input3
10
eixfumagit
vtophbepfe
pxbfgsqcug
ugpugtsxzq
bvfhxyehfk
uqyfwtmglr
jaitenfqiq
acwvufpfvv
jhaddglpva
aacxsyqvoj
eixfumagit
vtophbepfe
pxbfgsqcug
ugpugtsxzq
bvfhxyehok
uqyfwtmglr
jaitenfqiq
acwvufpfvv
jhaddglpva
aacxsyqvoj
```

```output3
5 9
```