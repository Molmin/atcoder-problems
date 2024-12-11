Score : $500$ points

## Problem Statement

We have $N$ camels numbered $1,2,\ldots,N$.
Snuke has decided to make them line up in a row.

The happiness of Camel $i$ will be $L_i$ if it is among the $K_i$ frontmost camels, and $R_i$ otherwise.

Snuke wants to maximize the total happiness of the camels. Find the maximum possible total happiness of the camel.

Solve this problem for each of the $T$ test cases given.

## Constraints

- All values in input are integers.
- $1 \leq T \leq 10^5$
- $1 \leq N \leq 2 \times 10^{5}$
- $1 \leq K_i \leq N$
- $1 \leq L_i, R_i \leq 10^9$
- The sum of values of $N$ in each input file is at most $2 \times 10^5$.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$
> 
> $K_1$ $L_1$ $R_1$
> 
> $\vdots$
> 
> $K_N$ $L_N$ $R_N$

## Output

Print $T$ lines. The $i$-th line should contain the answer to the $i$-th test case.

```input1
3
2
1 5 10
2 15 5
3
2 93 78
1 71 59
3 57 96
19
19 23 16
5 90 13
12 85 70
19 67 78
12 16 60
18 48 28
5 4 24
12 97 97
4 57 87
19 91 74
18 100 76
7 86 46
9 100 57
3 76 73
6 84 93
1 6 84
11 75 94
19 15 3
12 11 34
```

```output1
25
221
1354
```

- In the first test case, it is optimal to line up the camels in the order $2, 1$.-   - Camel $1$ is not the frontmost camel, so its happiness will be $10$.
-   - Camel $2$ is among the two frontmost camels, so its happiness will be $15$.
- In the second test case, it is optimal to line up the camels in the order $2, 1, 3$.-   - Camel $1$ is among the two frontmost camels, so its happiness will be $93$.
-   - Camel $2$ is the frontmost camel, so its happiness will be $71$.
-   - Camel $3$ is among the three frontmost camels, so its happiness will be $57$.