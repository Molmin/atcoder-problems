Score : $300$ points

## Problem Statement

$N$ students took a test with $M$ questions with two choices: $0$ and $1$.
You are given $N$ strings of length $M$ each: $S_1, S_2, \ldots, S_N$.
The $k$-th character of $S_i$ is `0` or `1`, representing the response of the $i$-th student to the $k$-th question. Although we know the response of each student to each question, we do not yet know the correct answer ― $0$ or $1$ ― to each problem.
Find the number of pairs $(i, j)$ satisfying $1 \leq i &lt; j \leq N$ such that it is impossible for Student $i$ and Student $j$ to have the same number of correct answers.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq M \leq 20$
- $S_i$ is a string of length $M$ consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $:$
> 
> $S_N$

## Output

Print the answer.

```input1
3 2
00
01
10
```

```output1
2
```

For example, if the correct answers to the $1$-st and $2$-nd questions are both $0$, Student $2$ and Student $3$ have the same number of correct answers ― $1$. On the other hand, Student $1$ and Student $2$ never have the same number of correct answers, nor do Student $1$ and Student $3$.

```input2
7 5
10101
00001
00110
11110
00100
11111
10000
```

```output2
10
```