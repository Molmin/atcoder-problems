Score : $600$ points

## Problem Statement

Takahashi runs AtCoder store.
$N$ customers visit the store, and $M$ items are sold in the store.
The motivation of the $i$-th $(1\leq i\leq N)$ customer is $B _ i$.
The value of the $j$-th $(1\leq j\leq M)$ item is $C _ j$.

Takahashi sets a price for each item.
The $i$-th customer buys one $j$-th item if and only if its price $P _ j$ satisfies:

- $B _ i+C _ j\geq P _ j$.

For each $j=1,2,\ldots,M$, find the gross sale of the $j$-th item when Takahashi sets the price so that the sale is maximized.
The gross sale of the $j$-th item is defined as the product of $P _ j$ and the number of customers that buys the $j$-th item.

## Constraints

- $1\leq N\leq2\times10^5$
- $1\leq M\leq2\times10^5$
- $0\leq B _ i\leq10^9\quad(1\leq i\leq N)$
- $0\leq C _ i\leq10^9\quad(1\leq i\leq M)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $B _ 1$ $B _ 2$ $\ldots$ $B _ N$
> 
> $C _ 1$ $C _ 2$ $\ldots$ $C _ M$

## Output

Print a line containing the gross sale of the $j$-th item for each $j=1,2,\ldots,M$, separated by spaces.

```input1
5 4
100 200 300 400 500
120 370 470 80
```

```output1
1280 2350 2850 1140
```

For example, he may set the price of the $1$-st item to $320$; then the $2$-nd, $3$-rd, $4$-th, and $5$-th customers will buy one.
The gross sale of the $1$-st item will be $1280$.
Since he cannot make the gross sale of the $1$-st item greater than $1280$, the $1$-st value to be printed is $1280$.

```input2
4 4
0 2 10 2
13 13 0 4
```

```output2
52 52 10 18
```

Two customers may have the same motivation.  Also, two items may have the same value.

```input3
12 15
16 592 222 983 729 338 747 61 451 815 838 281
406 319 305 519 317 590 507 946 365 5 673 478 340 176 2
```

```output3
6280 5466 5382 7410 5454 8120 7290 11680 5870 3670 8950 7000 5620 4608 3655
```

```input4
5 5
1000000000 1000000000 1000000000 1000000000 1000000000
1000000000 1000000000 1000000000 1000000000 1000000000
```

```output4
10000000000 10000000000 10000000000 10000000000 10000000000
```

Note that the gross sales may not fit into a $32$-bit integer type.