Score : $200$ points

## Problem Statement

How many triples of non-negative integers $(a, b, c)$ satisfy $a+b+c \leq S$ and $a \times b \times c \leq T$?

## Constraints

- $0 \leq S \leq 100$
- $0 \leq T \leq 10000$
- $S$ and $T$ are integers.

## Input

Input is given from Standard Input in the following format:

> $S$ $T$

## Output

Print the number of triples of non-negative integers $(a,b,c)$ satisfying the conditions.

```input1
1 0
```

```output1
4
```

The triples $(a,b,c)$ satisfying the conditions are $(0,0,0)$, $(0,0,1)$, $(0,1,0)$, and $(1,0,0)$ ― there are four of them.

```input2
2 5
```

```output2
10
```

```input3
10 10
```

```output3
213
```

```input4
30 100
```

```output4
2471
```