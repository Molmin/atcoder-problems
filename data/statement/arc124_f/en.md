Score : $900$ points

## Problem Statement

Given is a grid with $H$ rows and $W$ columns.
Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.

Initially, a camel is on $(1, 1)$, and a cat is on $(H, 1)$.

You can send the following four kinds of orders.

- `R`: Move the camel on $(i, j)$ to $(i, j+1)$.
- `D`: Move the camel on $(i, j)$ to $(i+1, j)$.
- `r`: Move the cat on $(i, j)$ to $(i, j+1)$.
- `u`: Move the cat on $(i, j)$ to $(i-1, j)$.

A sequence of orders satisfying all of the four conditions below is said to be **good**. Find the number of good sequences of orders, modulo $998244353$.

1. The final position of the camel will be $(H, W)$.
2. The final position of the cat will be $(1, W)$.
3. The following will happen exactly once: the camel and the cat are on the same square after an order is processed.
4. Neither the camel nor the cat will leave the grid.

## Constraints

- All values in input are integers.
- $2 \leq H,W \leq 2 \times 10^{5}$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$

## Output

Print the number of good sequences of orders, modulo $998244353$.

```input1
2 2
```

```output1
16
```

- The good sequences of orders include `DRur`, `DurR`, `RruD`, `RDru`, but not `DRru`, `RRR`.

```input2
200000 200000
```

```output2
412709667
```

- Be sure to print the count modulo $998244353$.