Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$.
For each $1\leq i\leq N$, let $S_i$ denote the string obtained by deleting the $i$-th character from $S$.

Find the number of pairs of integers $(i,j)$ that satisfy both of the conditions below.

- $1\leq i &lt; j\leq N$
- $S_i = S_j$

## Constraints

- $2\leq N\leq 3\times 10^5$
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
7
abbbcca
```

```output1
4
```

Here are the strings $S_i$ in order: `bbbcca`, `abbcca`, `abbcca`, `abbcca`, `abbbca`, `abbbca`, `abbbcc`.

The following $4$ pairs $(i,j)$ satisfy the conditions.

- $(i,j) = (2,3)$
- $(i,j) = (2,4)$
- $(i,j) = (3,4)$
- $(i,j) = (5,6)$

```input2
4
xxxx
```

```output2
6
```

```input3
2
pp
```

```output3
1
```

```input4
2
st
```

```output4
0
```