Score : $500$ points

## Problem Statement

You are given positive integers $N$ and $K$.

An integer sequence of length $N$ where all elements are between $1$ and $2^K - 1$, inclusive, is called a **good sequence**.

The **score** of a good sequence $A=(A_1,A_2,\ldots,A_N)$ is defined as follows:

- The number of distinct integers that can be expressed as $\displaystyle \left\lfloor\frac{A_i}{2^k} \right\rfloor$ using an integer $i$ between $1$ and $N$, inclusive, and a non-negative integer $k$.

For example, for $A=(3,5)$, five integers can be expressed as $\displaystyle \left\lfloor\frac{A_i}{2^k} \right\rfloor$: $0$, $1$, $2$, $3$, and $5$, so the score is $5$.

Find one good sequence with the maximum score.

For each input file, you are given $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq N \leq 10^5$
- $1 \leq K \leq 30$
- The sum of $N$ across the test cases in a single input file is at most $2 \times 10^5$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\text{case}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$ $K$

## Output

Print $T$ lines.

The $i$-th line should contain the answer for $\mathrm{case}_i$.

If there are multiple good sequences with the maximum score, any of them will be accepted.

```input1
3
3 3
7 2
8 20
```

```output1
5 6 7
2 2 3 3 1 3 3
662933 967505 876482 840117 1035841 651549 543175 781219
```

Consider the first test case.

For $A=(5,6,7)$, seven integers can be expressed as $\displaystyle \left\lfloor\frac{A_i}{2^k} \right\rfloor$: $0$, $1$, $2$, $3$, $5$, $6$, and $7$, so its score is $7$.

Outputs such as $A=(7,4,5)$ and $A=(6,5,4)$ would also be accepted.