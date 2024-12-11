Score : $100$ points

## Problem Statement

Snuke lives at position $x$ on a number line.
On this line, there are two stores $A$ and $B$, respectively at position $a$ and $b$, that offer food for delivery.

Snuke decided to get food delivery from the closer of stores $A$ and $B$.
Find out which store is closer to Snuke's residence.

Here, the distance between two points $s$ and $t$ on a number line is represented by $|s-t|$.

## Constraints

- $1 \leq x \leq 1000$
- $1 \leq a \leq 1000$
- $1 \leq b \leq 1000$
- $x, a$ and $b$ are pairwise distinct.
- The distances between Snuke's residence and stores $A$ and $B$ are different.

## Input

Input is given from Standard Input in the following format:

> $x$ $a$ $b$

## Output

If store $A$ is closer, print `A`; if store $B$ is closer, print `B`.

```input1
5 2 7
```

```output1
B
```

The distances between Snuke's residence and stores $A$ and $B$ are $3$ and $2$, respectively.
Since store $B$ is closer, print `B`.

```input2
1 999 1000
```

```output2
A
```