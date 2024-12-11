Score: $600$ points

## Problem Statement

You are given $N$ strings $S_1, S_2, \ldots, S_N$.

Find the minimum length of a string that contains all these strings as substrings.

Here, a string $S$ contains a string $T$ as a substring if $T$ can be obtained by deleting zero or more characters from the beginning and zero or more characters from the end of $S$.

## Constraints

- $N$ is an integer.
- $1 \leq N \leq 20$
- $S_i$ is a string consisting of lowercase English letters whose length is at least $1$.
- The total length of $S_1, S_2, \dots, S_N$ is at most $2\times 10^5$.

## Input

The input is given from Standard Input in the following format:

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

Print the answer as an integer.

```input1
3
snuke
kensho
uk
```

```output1
9
```

The string `snukensho` of length $9$ contains all of $S_1$, $S_2$, and $S_3$ as substrings.

Specifically, the first to fifth characters of `snukensho` correspond to $S_1$, the fourth to ninth correspond to $S_2$, and the third to fourth correspond to $S_3$.

No shorter string contains all of $S_1$, $S_2$, and $S_3$ as substrings.
Thus, the answer is $9$.

```input2
3
abc
abc
arc
```

```output2
6
```

```input3
6
cmcmrcc
rmrrrmr
mrccm
mmcr
rmmrmrcc
ccmcrcmcm
```

```output3
27
```