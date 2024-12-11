Score : $200$ points

## Problem Statement

$N$ participants, numbered $1$ to $N$, will participate in a contest with $M$ problems, numbered $1$ to $M$.

For an integer $i$ between $1$ and $N$ and an integer $j$ between $1$ and $M$, participant $i$ can solve problem $j$ if the $j$-th character of $S_i$ is `o`, and cannot solve it if that character is `x`.

The participants must be in pairs. Print the number of ways to form a pair of participants who can collectively solve all the $M$ problems.

More formally, print the number of pairs $(x,y)$ of integers satisfying $1\leq x &lt; y\leq N$ such that for any integer $j$ between $1$ and $M$, at least one of participant $x$ and participant $y$ can solve problem $j$.

## Constraints

- $N$ is an integer between $2$ and $30$, inclusive.
- $M$ is an integer between $1$ and $30$, inclusive.
- $S_i$ is a string of length $M$ consisting of `o` and `x`.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
5 5
ooooo
oooxx
xxooo
oxoxo
xxxxx
```

```output1
5
```

The following five pairs satisfy the condition: participants $1$ and $2$, participants $1$ and $3$, participants $1$ and $4$, participants $1$ and $5$, and participants $2$ and $3$.

On the other hand, the pair of participants $2$ and $4$, for instance, does not satisfy the condition because they cannot solve problem $4$.

```input2
3 2
ox
xo
xx
```

```output2
1
```

```input3
2 4
xxxx
oxox
```

```output3
0
```