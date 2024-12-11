Score : $1200$ points

## Problem Statement

$N$ problems have been chosen by the judges, now it's time to assign scores to them!

Problem $i$ must get an integer score $A_i$ between $1$ and $N$, inclusive.
The problems have already been sorted by difficulty: $A_1 \le A_2 \le \ldots \le A_N$ must hold.
Different problems can have the same score, though.

Being an ICPC fan, you want contestants who solve more problems to be ranked higher.
That's why, for any $k$ ($1 \le k \le N-1$), you want the sum of scores of any $k$ problems to be strictly less than the sum of scores of any $k+1$ problems.

How many ways to assign scores do you have? Find this number modulo the given prime $M$.

## Constraints

- $2 \leq N \leq 5000$
- $9 \times 10^8 &lt; M &lt; 10^9$
- $M$ is a prime.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of ways to assign scores to the problems, modulo $M$.

```input1
2 998244353
```

```output1
3
```

The possible assignments are $(1, 1)$, $(1, 2)$, $(2, 2)$.

```input2
3 998244353
```

```output2
7
```

The possible assignments are $(1, 1, 1)$, $(1, 2, 2)$, $(1, 3, 3)$, $(2, 2, 2)$, $(2, 2, 3)$, $(2, 3, 3)$, $(3, 3, 3)$.

```input3
6 966666661
```

```output3
66
```

```input4
96 925309799
```

```output4
83779
```