Score : $500$ points

## Problem Statement

Given is a sequence $A$ of length $N$.
You can do this operation any number of times: when the length of the sequence is at least $2$, choose two adjacent values, delete them, and insert their sum where they were.
How many sequences can result from zero or more operations? Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $|A_i| \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3
1 -1 1
```

```output1
4
```

The following four sequences can result from zero or more operations.

- ${1,-1,1}$
- ${1,0}$
- ${0,1}$
- ${1}$

```input2
10
377914575 -275478149 0 -444175904 719654053 -254224494 -123690081 377914575 -254224494 -21253655
```

```output2
321
```