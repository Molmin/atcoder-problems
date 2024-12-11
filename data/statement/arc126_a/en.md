Score : $300$ points

## Problem Statement

We have $N_2$ sticks of length $2$ each, $N_3$ sticks of length $3$ each, and $N_4$ sticks of length $4$ each. You can do the following operation any number of times.

- Choose two sticks.
- Let $x$ and $y$ be the lengths of these sticks. Bond them to form a stick of length $x+y$.

Find the maximum number of sticks that can be made whose lengths are exactly $10$.

Given $T$ test cases, solve each of them.

## Constraints

- $1\leq T\leq 100$
- $0\leq N_2, N_3, N_4\leq 10^{15}$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $N_2$ $N_3$ $N_4$

## Output

Print $T$ lines; the $i$-th line should contain the answer for $\text{case}_i$.

```input1
5
3 4 1
7 0 0
0 0 7
0 0 0
1000000000000000 1000000000000000 1000000000000000
```

```output1
2
1
0
0
900000000000000
```

Let us describe the first case.
We have three sticks of length $2$, four sticks of length $3$, and one stick of length $4$.

One way to make two sticks of length exactly $10$ is as follows.

- Bond four sticks of length $2$, $2$, $3$, $3$ in some order to make one stick of length $10$.
- Bond three sticks of length $3$, $3$, $4$ in some order to make one stick of length $10$.
- Now we have three sticks of length $2$, $10$, $10$.