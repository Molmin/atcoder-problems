Score : $500$ points

## Problem Statement

Let us define $\mathrm{mex}(x_1, x_2, x_3, \dots, x_k)$ as the smallest non-negative integer that does not occur in $x_1, x_2, x_3, \dots, x_k$.<br>
You are given an integer sequence of length $N$: $A = (A_1, A_2, A_3, \dots, A_N)$.<br>
For each integer $i$ such that $0 \le i \le N - M$, we compute $\mathrm{mex}(A_{i + 1}, A_{i + 2}, A_{i + 3}, \dots, A_{i + M})$. Find the minimum among the results of these $N - M + 1$ computations.

## Constraints

- $1 \le M \le N \le 1.5 \times 10^6$
- $0 \le A_i \lt N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## Output

Print the answer.

```input1
3 2
0 0 1
```

```output1
1
```

We have:

- for $i = 0$: $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(0, 0) = 1$
- for $i = 1$: $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(0, 1) = 2$

Thus, the answer is the minimum among $1$ and $2$, which is $1$.

```input2
3 2
1 1 1
```

```output2
0
```

We have:

- for $i = 0$: $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(1, 1) = 0$
- for $i = 1$: $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(1, 1) = 0$

```input3
3 2
0 1 0
```

```output3
2
```

We have:

- for $i = 0$: $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(0, 1) = 2$
- for $i = 1$: $\mathrm{mex}(A_{i + 1}, A_{i + 2}) = \mathrm{mex}(1, 0) = 2$

```input4
7 3
0 0 1 2 0 1 0
```

```output4
2
```