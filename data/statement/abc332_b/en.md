Score : $200$ points

## Problem Statement

AtCoder Inc. sells [glasses](https://suzuri.jp/AtCoder/5510290/water-glass/m/clear) and [mugs](https://suzuri.jp/AtCoder/5510290/mug/m/white).

Takahashi has a glass with a capacity of $G$ milliliters and a mug with a capacity of $M$ milliliters.<br>
Here, $G&lt;M$.

Initially, both the glass and the mug are empty.<br>
After performing the following operation $K$ times, determine how many milliliters of water are in the glass and the mug, respectively.

- When the glass is filled with water, that is, the glass contains exactly $G$ milliliters of water, discard all the water from the glass.
- Otherwise, if the mug is empty, fill the mug with water.
- Otherwise, transfer water from the mug to the glass until the mug is empty or the glass is filled with water.

## Constraints

- $1\leq K\leq 100$
- $1\leq G&lt;M\leq 1000$
- $G$, $M$, and $K$ are integers.

## Input

The input is given from Standard Input in the following format:

> $K$ $G$ $M$

## Output

Print the amounts, in milliliters, of water in the glass and the mug, in this order, separated by a space, after performing the operation $K$ times.

```input1
5 300 500
```

```output1
200 500
```

The operation will be performed as follows. Initially, both the glass and the mug are empty.

- Fill the mug with water. The glass has $0$ milliliters, and the mug has $500$ milliliters of water.
- Transfer water from the mug to the glass until the glass is filled. The glass has $300$ milliliters, and the mug has $200$ milliliters of water.
- Discard all the water from the glass. The glass has $0$ milliliters, and the mug has $200$ milliliters of water.
- Transfer water from the mug to the glass until the mug is empty. The glass has $200$ milliliters, and the mug has $0$ milliliters of water.
- Fill the mug with water. The glass has $200$ milliliters, and the mug has $500$ milliliters of water.

Thus, after five operations, the glass has $200$ milliliters, and the mug has $500$ milliliters of water.
Hence, print $200$ and $500$ in this order, separated by a space.

```input2
5 100 200
```

```output2
0 0
```