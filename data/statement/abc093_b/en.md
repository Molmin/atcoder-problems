Score : $200$ points

## Problem Statement

Print all the integers that satisfies the following in ascending order:

- Among the integers between $A$ and $B$ (inclusive), it is either within the $K$ smallest integers or within the $K$ largest integers.

## Constraints

- $1 \leq A \leq B \leq 10^9$
- $1 \leq K \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $K$

## Output

Print all the integers that satisfies the condition above in ascending order.

```input1
3 8 2
```

```output1
3
4
7
8
```

- $3$ is the first smallest integer among the integers between $3$ and $8$.
- $4$ is the second smallest integer among the integers between $3$ and $8$.
- $7$ is the second largest integer among the integers between $3$ and $8$.
- $8$ is the first largest integer among the integers between $3$ and $8$.

```input2
4 8 3
```

```output2
4
5
6
7
8
```

```input3
2 9 100
```

```output3
2
3
4
5
6
7
8
9
```