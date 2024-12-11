Score : $600$ points

## Problem Statement

Given is a positive integer $N$. Consider a sequence of integers $A = (A_1, \ldots, A_K)$ that satisfies the conditions below:

- $\sum_{i=1}^K A_i = N$;
- each $A_i$ is a positive integer such that every digit in its decimal notation is $1$, $2$, or $3$.

Find the minimum possible value of $K$, that is, the number of elements in such a sequence $A$.

Process $T$ test cases per input file.

## Constraints

- $1\leq T\leq 1000$
- $1\leq N\leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $N$

## Output

Print the answers.

```input1
5
456
10000
123
314
91
```

```output1
2
4
1
2
4
```

For each $N$, one optimal $A$ is shown below.

- For $N = 456$: $A = (133, 323)$.
- For $N = 10000$: $A = (323, 3132, 3232, 3313)$.
- For $N = 123$: $A = (123)$.
- For $N = 314$: $A = (312,2)$.
- For $N = 91$: $A = (22,23,23,23)$.