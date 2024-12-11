Score : $400$ points

## Problem Statement

Let $S$ be the concatenation of $10^{10}$ copies of the string `110`. (For reference, the concatenation of $3$ copies of `110` is `110110110`.)

We have a string $T$ of length $N$.

Find the number of times $T$ occurs in $S$ as a contiguous substring.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $T$ is a string of length $N$ consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $T$

## Output

Print the number of times $T$ occurs in $S$ as a contiguous substring.

```input1
4
1011
```

```output1
9999999999
```

$S$ is so long, so let us instead count the number of times `1011` occurs in the concatenation of $3$ copies of `110`, that is, `110110110`. We can see it occurs twice:

- <p>$1$ `1011` $0110$</p>
- <p>$1101$ `1011` $0$</p>

```input2
22
1011011011011011011011
```

```output2
9999999993
```