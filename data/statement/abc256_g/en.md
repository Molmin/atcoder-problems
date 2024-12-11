Score : $600$ points

## Problem Statement

There is a regular $N$-gon with side length $D$.

Starting from a vertex, we place black or white stones on the circumference at intervals of $1$.  As a result, each edge of the $N$-gon will have $(D+1)$ stones on it, for a total of $ND$ stones.

How many ways are there to place stones so that all edges have the same number of white stones on them?  Find the count modulo $998244353$.

## Constraints

- $3 \leq N \leq 10^{12}$
- $1 \leq D \leq 10^4$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $D$

## Output

Print the answer.

```input1
3 2
```

```output1
10
```

There are $10$ ways, as follows:

![Figure](https://img.atcoder.jp/abc256/ba2bebe9d374f281e2b44e36231abae2.png)

```input2
299792458 3141
```

```output2
138897974
```

Find the count modulo $998244353$.