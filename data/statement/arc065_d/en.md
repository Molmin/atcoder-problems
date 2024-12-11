Score : $900$ points

## Problem Statement

There is a string $S$ of length $N$ consisting of characters `0` and `1`. You will perform the following operation for each $i = 1, 2, ..., m$:

- Arbitrarily permute the characters within the substring of $S$ starting at the $l_i$-th character from the left and extending through the $r_i$-th character.

Here, the sequence $l_i$ is non-decreasing.

How many values are possible for $S$ after the $M$ operations, modulo $1000000007(= 10^9+7)$?

## Constraints

- $2 \leq N \leq 3000$
- $1 \leq M \leq 3000$
- $S$ consists of characters `0` and `1`.
- The length of $S$ equals $N$.
- $1 \leq l_i &lt; r_i \leq N$
- $l_i \leq l_{i+1}$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$
> 
> $l_1$ $r_1$
> 
> :
> 
> $l_M$ $r_M$

## Output

Print the number of the possible values for $S$ after the $M$ operations, modulo $1000000007$.

```input1
5 2
01001
2 4
3 5
```

```output1
6
```

After the first operation, $S$ can be one of the following three: `01001`, `00101` and `00011`.

After the second operation, $S$ can be one of the following six: `01100`, `01010`, `01001`, `00011`, `00101` and `00110`.

```input2
9 3
110111110
1 4
4 6
6 9
```

```output2
26
```

```input3
11 6
00101000110
2 4
2 3
4 7
5 6
6 10
10 11
```

```output3
143
```