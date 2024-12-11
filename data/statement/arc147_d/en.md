Score : $700$ points

## Problem Statement

Consider a sequence of integer sets of length $N$: $S=(S_1,S_2,\dots,S_N)$.
We call a sequence **brilliant** if it satisfies all of the following conditions:

- <p>$S_i$ is a (possibly empty) integer set, and its elements are in the range $[1,M]$. $(1 \le i \le N)$</p>
- <p>The number of integers that is included in exactly one of $S_i$ and $S_{i+1}$ is $1$. $(1 \le i \le N-1)$</p>

We define the score of a brilliant sequence $S$ as $\displaystyle \prod_{i=1}^{M}$ $($ the number of sets among $S_1,S_2,\dots,S_N$ that include $i$.$)$.

Find, modulo $998244353$, the sum of the scores of all possible brilliant sequences.

## Constraints

- $1 \le N,M \le 2 \times 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 3
```

```output1
24
```

Among all possible brilliant sequences, the following $6$ have positive scores.

- $S_1=\{1,2\},S_2=\{1,2,3\}$
- $S_1=\{1,3\},S_2=\{1,2,3\}$
- $S_1=\{2,3\},S_2=\{1,2,3\}$
- $S_1=\{1,2,3\},S_2=\{1,2\}$
- $S_1=\{1,2,3\},S_2=\{1,3\}$
- $S_1=\{1,2,3\},S_2=\{2,3\}$

All of them have a score of $4$, so the sum of them is $24$.

```input2
12 34
```

```output2
786334067
```