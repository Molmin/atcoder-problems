Score : $500$ points

## Problem Statement

Snuke has infinite number of square tiles and regular triangular tiles with side lengths $1$.
How many ways are there to form a regular dodecagon ($12$-sided polygon) with side lengths $d$ using the tiles?
Compute the answer modulo $998,244,353$.

Formally speaking,

- He can use an arbitrary number of tiles.
- No two tiles may overlap.
- The union of the regions filled by the tiles must be a regular dodecagon without holes.
- We consider two ways to be the same if we can change one way to the other way by rotations and translations (but not reflections), such that each tile perfectly matches with a tile of the same type.

## Constraints

- $1 \leq d \leq 10^6$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $d$

## Output

Print the answer.

```input1
1
```

```output1
1
```

The following picture shows the only way.

![](https://img.atcoder.jp/agc051/dad0de5f2e5c47119aa1a0da8ed28808.png)