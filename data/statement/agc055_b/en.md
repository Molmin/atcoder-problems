Score : $700$ points

## Problem Statement

You are given a string $S$ of length $N$, consisting of `A`, `B`, and `C`.
You are allowed to perform the following operation any number of times:

- Choose any $i$ with $1 \le i \le N-2$, such that $S_iS_{i+1}S_{i+2}$ is equal to `ABC`, `BCA`, or `CAB`.
Then, replace the three characters with `ABC`, `BCA`, or `CAB`.

For example, you can perform the following transformations with string `AABC`: 

- `AABC` $\to$ `ABCA` $\to$ `BCAA`

Determine if you can obtain string $T$ from string $S$ with some finite (maybe zero) number of operations above.

## Constraints

- $3\le N \le 5\cdot 10^5$
- $S$ is a string of length $N$ consisting of `A`, `B`, and `C`.
- $T$ is a string of length $N$ consisting of `A`, `B`, and `C`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

If you can transform $S$ into $T$ with the operations above, output `YES`, otherwise output `NO`.
The checker is case-insensitive: you can use either uppercase or lowercase letters.

```input1
4
AABC
BCAA
```

```output1
YES
```

This example was explained in the statement.

```input2
4
ABCA
BCAB
```

```output2
NO
```