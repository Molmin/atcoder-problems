Score : $1500$ points

## Problem Statement

You are given two sequences of positive integers of length $N$, $A=(A_1,A_2,\dots,A_N)$ and $B=(B_1,B_2,\dots,B_N)$.

Find the minimum possible inversion number of a sequence of positive integers $C=(C_1,C_2,\dots,C_N)$ such that the $i$-th element $C_i$ is $A_i$ or $B_i$.

Solve $T$ test cases.

## Constraints

- $1 \le T$
- $1 \le N \le 5 \times 10^5$
- $1 \le A_i,B_i \le \color{red}{\boldsymbol{3}}$
- The sum of $N$ for all test cases in a single input is at most $5 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ represents the $i$-th test case. Each test case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Print the answer.

```input1
8
3
2 1 1
3 3 2
5
2 1 3 2 2
1 2 1 2 3
8
2 1 3 3 3 1 2 2
1 2 3 1 2 1 3 2
10
1 3 2 1 1 3 2 2 2 2
2 3 1 1 1 1 3 1 3 3
12
2 1 1 3 3 1 3 3 2 2 2 1
3 1 1 3 3 1 3 2 3 2 1 2
15
1 3 1 3 3 2 2 1 2 3 3 3 1 1 3
3 3 3 2 3 2 1 3 2 1 2 2 3 3 3
18
3 1 1 3 3 2 1 1 2 3 2 1 3 3 3 2 2 3
1 1 3 2 1 3 1 2 1 2 3 2 2 1 3 1 3 3
20
2 2 3 1 1 3 2 3 3 1 3 1 2 1 2 2 1 2 3 2
1 1 1 3 3 1 1 3 2 2 1 1 1 1 1 2 2 2 2 1
```

```output1
1
0
6
6
20
9
5
17
```

For the first test case, an optimal solution is $C=(2,3,2)$ with the inversion number of $1$.

For the second test case, an optimal solution is $C=(1,1,1,2,3)$ with the inversion number of $0$.