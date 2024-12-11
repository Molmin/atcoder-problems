Score : $400$ points

## Problem Statement

Snuke found $N$ strange creatures.
Each creature has a fixed color and size. The color and size of the $i$-th creature are represented by $i$ and $A_i$, respectively.

Every creature can absorb another creature whose size is at most twice the size of itself.
When a creature of size $A$ and color $B$ absorbs another creature of size $C$ and color $D$ ($C \leq 2 \times A$), they will merge into one creature of size $A+C$ and color $B$.
Here, depending on the sizes of two creatures, it is possible that both of them can absorb the other.

Snuke has been watching these creatures merge over and over and ultimately become one creature.
Find the number of the possible colors of this creature.

## Constraints

- $2 \leq N \leq 100000$
- $1 \leq A_i \leq 10^9$
- $A_i$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ … $A_N$

## Output

Print the number of the possible colors of the last remaining creature after the $N$ creatures repeatedly merge and ultimately become one creature.

```input1
3
3 1 4
```

```output1
2
```

The possible colors of the last remaining creature are colors $1$ and $3$.
For example, when the creature of color $3$ absorbs the creature of color $2$, then the creature of color $1$ absorbs the creature of color $3$, the color of the last remaining creature will be color $1$.

```input2
5
1 1 1 1 1
```

```output2
5
```

There may be multiple creatures of the same size.

```input3
6
40 1 30 2 7 20
```

```output3
4
```