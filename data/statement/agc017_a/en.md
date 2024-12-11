Score : $200$ points

## Problem Statement

There are $N$ bags of biscuits. The $i$-th bag contains $A_i$ biscuits.

Takaki will select some of these bags and eat all of the biscuits inside.
Here, it is also possible to select all or none of the bags.

He would like to select bags so that the total number of biscuits inside is congruent to $P$ modulo $2$.
How many such ways to select bags there are?

## Constraints

- $1 \leq N \leq 50$
- $P = 0$ or $1$
- $1 \leq A_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$ $P$
> 
> $A_1$ $A_2$ ... $A_N$

## Output

Print the number of ways to select bags so that the total number of biscuits inside is congruent to $P$ modulo $2$.

```input1
2 0
1 3
```

```output1
2
```

There are two ways to select bags so that the total number of biscuits inside is congruent to $0$ modulo $2$:

- Select neither bag. The total number of biscuits is $0$.
- Select both bags. The total number of biscuits is $4$.

```input2
1 1
50
```

```output2
0
```

```input3
3 0
1 1 1
```

```output3
4
```

Two bags are distinguished even if they contain the same number of biscuits.

```input4
45 1
17 55 85 55 74 20 90 67 40 70 39 89 91 50 16 24 14 43 24 66 25 9 89 71 41 16 53 13 61 15 85 72 62 67 42 26 36 66 4 87 59 91 4 25 26
```

```output4
17592186044416
```