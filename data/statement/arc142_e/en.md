Score : $900$ points

## Problem Statement

There are $N$ wizards, numbered $1, \ldots, N$.<br>
Wizard $i$ has a strength of $a_i$ and plans to defeat a monster with a strength of $b_i$.

You can perform the following operation any number of times.

- Increase the strength of any wizard of your choice by $1$.

A pair of Wizard $i$ and Wizard $j$ (let us call this pair $(i, j)$) is said to be **good** when at least one of the following conditions is satisfied.

- Wizard $i$ has a strength of at least $b_i$ and Wizard $j$ has a strength of at least $b_j$.
- Wizard $i$ has a strength of at least $b_j$ and Wizard $j$ has a strength of at least $b_i$.

Your objective is to make the pair $(x_i, y_i)$ good for every $i=1, \ldots, M$.<br>
Find the minimum number of operations needed to achieve it.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq a_i,b_i \leq 100$
- $1 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq x_i \lt y_i \leq N$
- $(x_i,y_i) \neq (x_j,y_j)$, if $i\neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_N$ $b_N$
> 
> $M$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_M$ $y_M$

## Output

Print the answer.

```input1
5
1 5
2 4
3 3
4 2
5 1
3
1 4
2 5
3 5
```

```output1
2
```

You can perform the operation once for Wizard $1$ and once for Wizard $4$ to achieve the objective with the fewest operations.

```input2
4
1 1
1 1
1 1
1 1
3
1 2
2 3
3 4
```

```output2
0
```

No operation is needed.

```input3
9
1 1
2 4
5 5
7 10
9 3
9 13
10 9
3 9
2 9
7
1 5
2 5
1 6
2 4
3 4
4 9
8 9
```

```output3
22
```