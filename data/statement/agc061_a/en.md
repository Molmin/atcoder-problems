Score : $500$ points

## Problem Statement

There is an array $A_1, \ldots, A_N$, and initially $A_i = i$ for all $i$. Define the following routine $\mathrm{shuffle}(L, R)$:

- If $R = L + 1$, swap values of $A_L$ and $A_R$ and terminate.
- Otherwise, run $\mathrm{shuffle}(L, R - 1)$ followed by $\mathrm{shuffle}(L + 1, R)$.

Suppose we run $\mathrm{shuffle}(1, N)$. Print the value of $A_K$ after the routine finishes.

For each input file, solve $T$ test cases.

## Constraints

- $1 \leq T \leq 1000$
- $2 \leq N \leq 10^{18}$
- $1 \leq K \leq N$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$ $K$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th case.

```input1
7
2 1
2 2
5 1
5 2
5 3
5 4
5 5
```

```output1
2
1
2
4
1
5
3
```

For $N=2$, we do the following and get $A=(2,1)$.

- Run $\mathrm{shuffle}(1, 2)$, and swap $A_1$ and $A_2$.

For $N=5$, we do the following and get $A=(2,4,1,5,3)$.

- Run $\mathrm{shuffle}(1, 5)$:-   - Run $\mathrm{shuffle}(1, 4)$:-   -   - Run $\mathrm{shuffle}(1, 3)$:-   -   -   - $\vdots$
-   -   - Run $\mathrm{shuffle}(2, 4)$:-   -   -   - $\vdots$
-   - Run $\mathrm{shuffle}(2, 5)$:-   -   - Run $\mathrm{shuffle}(2, 4)$:-   -   -   - $\vdots$
-   -   - Run $\mathrm{shuffle}(3, 5)$:-   -   -   - $\vdots$