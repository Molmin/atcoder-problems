Score : $200$ points

## Problem Statement

You are given a sequence of $N$ integers between $1$ and $N$ (inclusive): $A = (A_1, A_2, \dots, A_N)$.

Determine whether $A$ is a permutation of $(1, 2, \dots, N)$.

## Constraints

- $1 \leq N \leq 10^3$
- $1 \leq A_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

If $A$ is a permutation of $(1, 2, \dots, N)$, print `Yes`; otherwise, print `No`.

```input1
5
3 1 2 4 5
```

```output1
Yes
```

$(3, 1, 2, 4, 5)$ is a permutation of $(1, 2, 3, 4, 5)$, so we should print `Yes`.

```input2
6
3 1 4 1 5 2
```

```output2
No
```

$(3, 1, 4, 1, 5, 2)$ is not a permutation of $(1, 2, 3, 4, 5, 6)$, so we should print `No`.

```input3
3
1 2 3
```

```output3
Yes
```

```input4
1
1
```

```output4
Yes
```