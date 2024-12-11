Score : $1100$ points

## Problem Statement

For an integer array $A=(A_1, A_2, \ldots, A_{N + K-1})$ ($1 \leq A_i \leq N+K-1$), let's construct an array $B=(B_1, B_2, \ldots, B_N)$, where $B_i$ is the number of distinct elements in $A_i,A_{i+1},\ldots,A_{i+K-1}$.

You are given $B_1, B_2, \ldots, B_N$. Determine if there exists an array $A$ which could have produced such an array $B$, and if yes, construct one.

Solve $T$ test cases for each input file.

## Constraints

- $1 \le T \le 5 \cdot 10^4$
- $2 \le N \le 2 \cdot 10^5$
- $2 \le K \le 2 \cdot 10^5$
- $1 \le B_i \le K$
- The sum of $N$ in one input file doesn't exceed $2\cdot 10^5$.
- The sum of $K$ in one input file doesn't exceed $2\cdot 10^5$.
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

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
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

## Output

For each test case, if such an array $A$ doesn't exist, output `NO`.

Otherwise, output the answer in the following format:

> YES
> 
> $A_1$ $A_2$ $\ldots$ $A_{N+K-1}$

Here, $1 \leq A_i \leq N+K-1$ must hold, and $A$ should produce $B$.
If multiple solutions exist, any of them will be accepted.

In printing `YES` or `NO`, you can output each letter in any case (upper or lower).

```input1
3
3 3
1 2 1
4 3
1 2 2 1
6 4
3 3 3 3 3 3
```

```output1
NO
YES
1 1 1 2 2 2 
YES
1 2 3 1 2 3 1 2 3
```