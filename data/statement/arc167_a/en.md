Score : $300$ points

## Problem Statement

We have $N$ slices of toast and $M$ plates. $M$ is an integer between $\frac{N}{2}$ and $N$, inclusive. The $i$-th slice of toast has a deliciousness of $A_{i}$.

Let us put the $N$ slices of toast on the $M$ plates to satisfy the following two conditions.

- Each plate can have at most two slices of toast on it.
- Every slice of toast is on some plate.

Let $B_{j}$ be the sum of the deliciousness of the toast on the $j$-th plate ($0$ if the plate has no toast on it). Then, let the **unbalancedness** be $\sum_{j=1}^{M} B_{j}^{2}$.

Find the minimum possible value of the unbalancedness.

## Constraints

- $1\leq N\leq 2\times 10^{5}$
- $\frac{N}{2}\leq M\leq N$
- $1\leq A_{i}\leq 2\times 10^{5}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{N}$

## Output

Print the answer.

```input1
5 3
1 1 1 6 7
```

```output1
102
```

If you put the first and second slices on the first plate,
the third and fourth slices on the second plate, and
the fifth slice on the third plate,
we have $(1+1)^{2}+(1+6)^{2}+7^2=102$, so the unbalancedness is $102$.

There is no way to put them to make the unbalancedness less than $102$, so print $102$.

Note that you cannot put the first, second, and third slices on the same plate.

```input2
2 1
167 924
```

```output2
1190281
```

```input3
12 9
22847 98332 854 68844 81080 46058 40949 62493 76561 52907 88628 99740
```

```output3
61968950639
```