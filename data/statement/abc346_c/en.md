Score: $250$ points

## Problem Statement

You are given a sequence of positive integers $A=(A_1,A_2,\dots,A_N)$ of length $N$ and a positive integer $K$.

Find the sum of the integers between $1$ and $K$, inclusive, that do not appear in the sequence $A$.

## Constraints

- $1\leq N \leq 2\times 10^5$
- $1\leq K \leq 2\times 10^9$
- $1\leq A_i \leq 2\times 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4 5
1 6 3 1
```

```output1
11
```

Among the integers between $1$ and $5$, three numbers, $2$, $4$, and $5$, do not appear in $A$.

Thus, print their sum: $2+4+5=11$.

```input2
1 3
346
```

```output2
6
```

```input3
10 158260522
877914575 24979445 623690081 262703497 24979445 1822804784 1430302156 1161735902 923078537 1189330739
```

```output3
12523196466007058
```