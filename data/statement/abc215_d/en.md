Score : $400$ points

## Problem Statement

Given a sequence of $N$ positive integers $A=(A_1,A_2,\dots,A_N)$, find every integer $k$ between $1$ and $M$ (inclusive) that satisfies the following condition:

- $\gcd(A_i,k)=1$ for every integer $i$ such that $1 \le i \le N$.

## Constraints

- All values in input are integers.
- $1 \le N,M \le 10^5$
- $1 \le A_i \le 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

In the first line, print $x$: the number of integers satisfying the requirement.<br>
In the following $x$ lines, print the integers satisfying the requirement, in ascending order, each in its own line.

```input1
3 12
6 1 5
```

```output1
3
1
7
11
```

For example, $7$ has the properties $\gcd(6,7)=1,\gcd(1,7)=1,\gcd(5,7)=1$, so it is included in the set of integers satisfying the requirement.<br>
On the other hand, $9$ has the property $\gcd(6,9)=3$, so it is not included in that set.<br>
We have three integers between $1$ and $12$ that satisfy the condition: $1$, $7$, and $11$. Be sure to print them in ascending order.