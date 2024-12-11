Score : $1100$ points

## Problem Statement

We call an infinite sequence of positive integers $(a_1,a_2,\cdots)$ **good** if and only if it satisfies both of the following conditions:

- <p>There exists a finite constant $C$ such that $a_n \le C \cdot n$ for all $1 \le n$;</p>
- <p>For all pairs of positive integers $(n,m)$, $a_n \mid a_m$ if and only if $n\mid m$. Here, $x \mid y$ means $x$ divides $y$.</p>

You are given a positive integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$.
Check if there exists a good infinite sequence starting with $(A_1,A_2,\cdots,A_N)$.

You have $T$ testcases to solve.

## Constraints

- $1\le T \le 5000$
- $1 \leq N \leq 5000$
- $1 \leq A_i \leq 10^{18}$
- The sum of $N$ across the test cases in a single input is at most $5000$.
- All input values are integers.

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

Each test case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

For each test case, if there exists a good infinite sequence starting with $(A_1,A_2,\cdots,A_N)$, print `Yes`, and otherwise print `No`.
In printing `Yes` or `No`, you can output each letter in any case (upper or lower).

```input1
5
5
1 2 3 4 5
5
1 4 9 16 25
5
1 4 6 8 10
5
1 2 4 4 5
5
1 2 3 5 4
```

```output1
Yes
Yes
Yes
No
No
```

For the $1$-st test case, we can let $a_n=n$ and that satisfies the condition.