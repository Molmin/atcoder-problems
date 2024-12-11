Score : $300$ points

## Problem Statement

Hearing that energy drinks increase rating in those sites, Takahashi decides to buy up $M$ cans of energy drinks.

There are $N$ stores that sell energy drinks. In the $i$-th store, he can buy at most $B_i$ cans of energy drinks for $A_i$ yen (the currency of Japan) each.

What is the minimum amount of money with which he can buy $M$ cans of energy drinks?

It is guaranteed that, in the given inputs, a sufficient amount of money can always buy $M$ cans of energy drinks.

## Constraints

- All values in input are integers.
- $1 \leq N, M \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^5$
- $B_1 + ... + B_N \geq M$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the minimum amount of money with which Takahashi can buy $M$ cans of energy drinks.

```input1
2 5
4 9
2 4
```

```output1
12
```

With $12$ yen, we can buy one drink at the first store and four drinks at the second store, for the total of five drinks. However, we cannot buy $5$ drinks with $11$ yen or less.

```input2
4 30
6 18
2 5
3 10
7 9
```

```output2
130
```

```input3
1 100000
1000000000 100000
```

```output3
100000000000000
```

The output may not fit into a $32$-bit integer type.