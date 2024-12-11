Score : $600$ points

## Problem Statement

Given is a string $S$ consisting of `Y` and `.`.

You can do the following operation on $S$ between $0$ and $K$ times (inclusive).

- Swap two adjacent characters in $S$.

What is the maximum possible number of consecutive `Y`s in $S$ after the operations?

## Constraints

- $2 \leq |S| \leq 2 \times 10^5$
- Each character of $S$ is `Y` or `.`.
- $0 \leq K \leq 10^{12}$
- $K$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the answer.

```input1
YY...Y.Y.Y.
2
```

```output1
3
```

After swapping the $6$-th, $7$-th characters, and $9$-th, $10$-th characters, we have `YY....YYY..`, which has three consecutive `Y`s at $7$-th through $9$-th positions.<br>
We cannot have four or more consecutive `Y`s, so the answer is $3$.

```input2
YYYY....YYY
3
```

```output2
4
```