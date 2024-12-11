Score : $400$ points

## Problem Statement

You are given a sequence of $N$ positive integers: $A=(A_1,A_2, \dots A_N)$.
You can do the operation below zero or more times. At least how many operations are needed to make $A$ a palindrome?

- Choose a pair $(x,y)$ of positive integers, and replace every occurrence of $x$ in $A$ with $y$.

Here, we say $A$ is a palindrome if and only if $A_i=A_{N+1-i}$ holds for every $i$ ($1 \le i \le N$).

## Constraints

- All values in input are integers.
- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 2 \times 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
8
1 5 3 2 5 2 3 1
```

```output1
2
```

- Initially, we have $A=(1,5,3,2,5,2,3,1)$.
- After replacing every occurrence of $3$ in $A$ with $2$, we have $A=(1,5,2,2,5,2,2,1)$.
- After replacing every occurrence of $2$ in $A$ with $5$, we have $A=(1,5,5,5,5,5,5,1)$.

In this way, we can make $A$ a palindrome in two operations, which is the minimum needed.

```input2
7
1 2 3 4 1 2 3
```

```output2
1
```

```input3
1
200000
```

```output3
0
```

$A$ may already be a palindrome in the beginning.