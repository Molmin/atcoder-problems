Score : $300$ points

## Problem Statement

You are given an integer $N$. Among the integers between $1$ and $N$ (inclusive), how many *Shichi-Go-San numbers* (literally "Seven-Five-Three numbers") are there?

Here, a Shichi-Go-San number is a positive integer that satisfies the following condition:

- When the number is written in base ten, each of the digits `7`, `5` and `3` appears at least once, and the other digits never appear.

## Constraints

- $1 \leq N &lt; 10^9$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the number of the Shichi-Go-San numbers between $1$ and $N$ (inclusive).

```input1
575
```

```output1
4
```

There are four Shichi-Go-San numbers not greater than $575$: $357, 375, 537$ and $573$.

```input2
3600
```

```output2
13
```

There are $13$ Shichi-Go-San numbers not greater than $3600$: the above four numbers, $735, 753, 3357, 3375, 3537, 3557, 3573, 3575$ and $3577$.

```input3
999999999
```

```output3
26484
```