Score : $200$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.  The $x$-th $(1 \le x \le N)$ character of $S$ is $S_x$.

For each $i=1,2,\dots,N-1$, find the maximum non-negative integer $l$ that satisfies all of the following conditions:

- $l+i \le N$, and
- for all integers $k$ such that $1 \le k \le l$, it holds that $S_{k} \neq S_{k+i}$.

Note that $l=0$ always satisfies the conditions.

## Constraints

- $N$ is an integer such that $2 \le N \le 5000$.
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print $(N-1)$ lines.  The $x$-th $(1 \le x &lt; N)$ line should contain the answer as an integer when $i=x$.

```input1
6
abcbac
```

```output1
5
1
2
0
1
```

In this input, $S=$ `abcbac`.  

- When $i=1$, we have $S_1 \neq S_2, S_2 \neq S_3, \dots$, and $S_5 \neq S_6$, so the maximum value is $l=5$.
- When $i=2$, we have $S_1 \neq S_3$ but $S_2 = S_4$, so the maximum value is $l=1$.
- When $i=3$, we have $S_1 \neq S_4$ and $S_2 \neq S_5$ but $S_3 = S_6$, so the maximum value is $l=2$.
- When $i=4$, we have $S_1 = S_5$, so the maximum value is $l=0$.
- When $i=5$, we have $S_1 \neq S_6$, so the maximum value is $l=1$.