Score: $300$ points

## Problem Statement

We have $N$ voting papers. The $i$-th vote $(1 \leq i \leq N)$ has the string $S_i$ written on it.

Print all strings that are written on the most number of votes, in lexicographical order.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $S_i$ $(1 \leq i \leq N)$ are strings consisting of lowercase English letters.
- The length of $S_i$ $(1 \leq i \leq N)$ is between $1$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $:$
> 
> $S_N$

## Output

Print all strings in question in lexicographical order.

```input1
7
beat
vet
beet
bed
vet
bet
beet
```

```output1
beet
vet
```

`beet` and `vet` are written on two sheets each, while `beat`, `bed`, and `bet` are written on one vote each. Thus, we should print the strings `beet` and `vet`.

```input2
8
buffalo
buffalo
buffalo
buffalo
buffalo
buffalo
buffalo
buffalo
```

```output2
buffalo
```

```input3
7
bass
bass
kick
kick
bass
kick
kick
```

```output3
kick
```

```input4
4
ushi
tapu
nichia
kun
```

```output4
kun
nichia
tapu
ushi
```