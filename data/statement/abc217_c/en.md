Score : $300$ points

## Problem Statement

We will call a sequence of length $N$ where each of $1,2,\dots,N$ occurs once as a permutation of length $N$.<br>
Given a permutation of length $N$, $P = (p_1, p_2,\dots,p_N)$, print a permutation of length $N$, $Q = (q_1,\dots,q_N)$, that satisfies the following condition.

- For every $i$ $(1 \leq i \leq N)$, the $p_i$-th element of $Q$ is $i$.

It can be proved that there exists a unique $Q$ that satisfies the condition.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $(p_1,p_2,\dots,p_N)$ is a permutation of length $N$ (defined in Problem Statement).
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $p_2$ $\dots$ $p_N$

## Output

Print the sequence $Q$ in one line, with spaces in between.

> $q_1$ $q_2$ $\dots$ $q_N$

```input1
3
2 3 1
```

```output1
3 1 2
```

The permutation $Q=(3,1,2)$ satisfies the condition, as follows.

- For $i = 1$, we have $p_i = 2, q_2 = 1$.
- For $i = 2$, we have $p_i = 3, q_3 = 2$.
- For $i = 3$, we have $p_i = 1, q_1 = 3$.

```input2
3
1 2 3
```

```output2
1 2 3
```

If $p_i = i$ for every $i$ $(1 \leq i \leq N)$, we will have $P = Q$.

```input3
5
5 3 2 4 1
```

```output3
5 3 2 4 1
```