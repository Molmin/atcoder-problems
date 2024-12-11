Score : $200$ points

## Problem Statement

You are given two integers $K$ and $S$.<br>
Three variable $X, Y$ and $Z$ takes integer values satisfying $0 \leq X,Y,Z \leq K$.<br>
How many different assignments of values to $X, Y$ and $Z$ are there such that $X + Y + Z = S$?  

## Constraints

- $2 \leq K \leq 2500$
- $0 \leq S \leq 3K$
- $K$ and $S$ are integers.

## Input

The input is given from Standard Input in the following format:

> $K$ $S$

## Output

Print the number of the triples of $X, Y$ and $Z$ that satisfy the condition.

```input1
2 2
```

```output1
6
```

There are six triples of $X, Y$ and $Z$ that satisfy the condition:

- $X = 0, Y = 0, Z = 2$
- $X = 0, Y = 2, Z = 0$
- $X = 2, Y = 0, Z = 0$
- $X = 0, Y = 1, Z = 1$
- $X = 1, Y = 0, Z = 1$
- $X = 1, Y = 1, Z = 0$

```input2
5 15
```

```output2
1
```

The maximum value of $X + Y + Z$ is $15$, achieved by one triple of $X, Y$ and $Z$.