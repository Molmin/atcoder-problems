Score : $400$ points

## Problem Statement

We have a string $S$ of length $N$ consisting of `R`, `G`, and `B`.

Find the number of triples $(i, \sim j, \sim k) \sim (1 \leq i &lt; j &lt; k \leq N)$ that satisfy both of the following conditions:

- $S_i \neq S_j$, $S_i \neq S_k$, and $S_j \neq S_k$.
- $j - i \neq k - j$.

## Constraints

- $1 \leq N \leq 4000$
- $S$ is a string of length $N$ consisting of `R`, `G`, and `B`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of triplets in question.

```input1
4
RRGB
```

```output1
1
```

Only the triplet $(1, \sim 3, \sim 4)$ satisfies both conditions. The triplet $(2, \sim 3, \sim 4)$ satisfies the first condition but not the second, so it does not count.

```input2
39
RBRBGRBGGBBRRGBBRRRBGGBRBGBRBGBRBBBGBBB
```

```output2
1800
```