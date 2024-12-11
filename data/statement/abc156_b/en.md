Score : $200$ points

## Problem Statement

Given is an integer $N$. Find the number of digits that $N$ has in base $K$.

## Notes

For information on base-$K$ representation, see [Positional notation - Wikipedia](https://en.wikipedia.org/wiki/Positional_notation).

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^9$
- $2 \leq K \leq 10$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of digits that $N$ has in base $K$.

```input1
11 2
```

```output1
4
```

In binary, $11$ is represented as `1011`.

```input2
1010101 10
```

```output2
7
```

```input3
314159265 3
```

```output3
18
```