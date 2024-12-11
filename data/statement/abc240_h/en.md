Score : $600$ points

## Problem Statement

You are given a string $S = s_1 s_2 \ldots s_N$ of length $N$ consisting of $0$'s and $1$'s.

Find the maximum integer $K$ such that there is a sequence of $K$ pairs of integers $\big((L_1, R_1), (L_2, R_2), \ldots, (L_K, R_K)\big)$ that satisfy all three conditions below.

- $1 \leq L_i \leq R_i \leq N$ for each $i = 1, 2, \ldots, K$.
- $R_i \lt L_{i+1}$ for $i = 1, 2, \ldots, K-1$.
- The string $s_{L_i}s_{L_i+1} \ldots s_{R_i}$ is **strictly lexicographically smaller** than the string $s_{L_{i+1}}s_{L_{i+1}+1}\ldots s_{R_{i+1}}$.

## Constraints

- $1 \leq N \leq 2.5 \times 10^4$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of $0$'s and $1$'s.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
7
0101010
```

```output1
3
```

For $K = 3$, one sequence satisfying the conditition is $(L_1, R_1) = (1, 1), (L_2, R_2) = (3, 5), (L_3, R_3) = (6, 7)$.
Indeed, $s_1 = 0$ is strictly lexicographically smaller than $s_3s_4s_5 = 010$, and $s_3s_4s_5 = 010$ is strictly lexicographically smaller than $s_6s_7 = 10$.<br>
For $K \geq 4$, there is no sequence $\big((L_1, R_1), (L_2, R_2), \ldots, (L_K, R_K)\big)$ satisfying the condition.

```input2
30
000011001110101001011110001001
```

```output2
9
```