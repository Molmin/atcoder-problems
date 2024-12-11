Score : $600$ points

## Problem Statement

You will participate in $N$ contests, numbered $1$ to $N$ in chronological order.<br>
A participant in each contest will be given a value called **performance** for that contest. Let $P_i$ be the performance for contest $i$.<br>
Additionally, you have a value called **rating**, which changes according to the performances in contests. The initial rating is $0$, and the rating after contest $n$ is $\frac{1}{n} \left(\sum_{i=1}^n P_i \right)$.<br>
However, once your rating is $B$ **or higher**, later contests will not affect your rating.

Before the contests, you have decided to estimate your performance in each contest. Let $a_i$ be the initial estimate of your performance in contest $i$. Process $Q$ queries in the order they are given.

In each query, you are given two integers $c$ and $x$. First, change the estimate of your performance in contest $c$ to $x$. (This change is persistent.) Then, assuming that you get the estimated performances in all $N$ contests, print your final rating after the contests.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $1 \leq B \leq 10^9$
- $1 \leq Q \leq 10^5$
- $0 \leq a_i \leq 10^9$
- $1 \leq c \leq N$
- $0 \leq x \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format, where $c_i$ and $x_i$ are the $c$ and $x$ for the $i$-th query:

> $N$ $B$ $Q$
> 
> $a_1$ $a_2$ $\dots$ $a_N$
> 
> $c_1$ $x_1$
> 
> $c_2$ $x_2$
> 
> $\vdots$
> 
> $c_Q$ $x_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.<br>
Your output is considered correct if the absolute or relative error from the true answer is at most $10^{-9}$.

```input1
5 6 7
5 1 9 3 8
4 9
2 10
1 0
3 0
3 30
5 100
1 100
```

```output1
6.000000000000000
7.500000000000000
6.333333333333333
5.400000000000000
13.333333333333334
13.333333333333334
100.000000000000000
```

Initially, $(a_1, a_2, a_3, a_4, a_5) = (5, 1, 9, 3, 8)$.<br>
The first query changes $a_4$ to $9$, making $(a_1, a_2, a_3, a_4, a_5) = (5, 1, 9, 9, 8)$.<br>
Here, assuming that your performance in contest $i$ is $a_i$, your rating will change as follows.

- Initially, your rating is $0$.
- After contest $1$, your rating will be $5 / 1 = 5$.
- After contest $2$, your rating will be $(5 + 1) / 2 = 3$.
- After contest $3$, your rating will be $(5 + 1 + 9) / 3 = 5$.
- After contest $4$, your rating will be $(5 + 1 + 9 + 9) / 4 = 6$.
- Your rating will no longer change, because your rating after contest $4$ is not less than $B$.

Thus, your final rating after the contests is $6$, which should be printed in the first line.