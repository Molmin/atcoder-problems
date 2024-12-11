Score : $100$ points

## Problem Statement

Iroha loves *Haiku*. Haiku is a short form of Japanese poetry. A Haiku consists of three phrases with $5$, $7$ and $5$ syllables, in this order.

To create a Haiku, Iroha has come up with three different phrases. These phrases have $A$, $B$ and $C$ syllables, respectively. Determine whether she can construct a Haiku by using each of the phrases once, in some order.

## Constraints

- $1 \leq A,B,C \leq 10$

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If it is possible to construct a Haiku by using each of the phrases once, print `YES` (case-sensitive). Otherwise, print `NO`.

```input1
5 5 7
```

```output1
YES
```

Using three phrases of length $5$, $5$ and $7$, it is possible to construct a Haiku.

```input2
7 7 5
```

```output2
NO
```