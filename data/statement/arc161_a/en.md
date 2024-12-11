Score : $300$ points

## Problem Statement

Let $N$ be a positive **odd** number.
A sequence of integers of length $N$, $S = (S_1, S_2, \dots, S_N)$, is said to be **M-type** if "for each even number $i = 2, 4, \dots, N - 1$, it holds that $S_{i-1} &lt; S_i$ and $S_i &gt; S_{i+1}$".

You are given a sequence of positive integers of length $N$, $A = (A_1, A_2, \dots, A_N)$.
Determine if it is possible to rearrange $A$ to be M-type.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $N$ is an **odd** number.
- $1 \leq A_i \leq 10^9 \ \ (1 \leq i \leq N)$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1 \ A_2 \ \dots \ A_N$

## Output

If it is possible to rearrange the given integer sequence $A$ to be M-type, print `Yes`; otherwise, print `No`.

```input1
5
1 2 3 4 5
```

```output1
Yes
```

The given sequence is $A = (1, 2, 3, 4, 5)$. 
After rearranging it, for example, to $B = (4, 5, 1, 3, 2)$, 

- for $i = 2$, it holds that $B_1 = 4 &lt; 5 = B_2$ and $B_2 = 5 &gt; 1 = B_3$;
- for $i = 4$, it holds that $B_3 = 1 &lt; 3 = B_4$ and $B_4 = 3 &gt; 2 = B_5$.

Therefore, this sequence $B$ is M-type, and the answer is `Yes`.

```input2
5
1 6 1 6 1
```

```output2
Yes
```

The given sequence $A$ itself is M-type.

```input3
5
1 6 6 6 1
```

```output3
No
```

It is impossible to rearrange it to be M-type.