Score : $200$ points

## Problem Statement

An election is taking place.

$N$ people voted. The $i$-th person $(1 \leq i \leq N)$ cast a vote to the candidate named $S_i$.

Find the name of the candidate who received the most votes. The given input guarantees that there is a unique candidate with the most votes.

## Constraints

- $1 \leq N \leq 100$
- $S_i$ is a string of length between $1$ and $10$ (inclusive) consisting of lowercase English letters.
- $N$ is an integer.
- There is a unique candidate with the most votes.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the name of the candidate who received the most votes.

```input1
5
snuke
snuke
takahashi
takahashi
takahashi
```

```output1
takahashi
```

`takahashi` got $3$ votes, and `snuke` got $2$, so we print `takahashi`.

```input2
5
takahashi
takahashi
aoki
takahashi
snuke
```

```output2
takahashi
```

```input3
1
a
```

```output3
a
```