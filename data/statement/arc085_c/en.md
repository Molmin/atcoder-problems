Score : $700$ points

## Problem Statement

We have $N$ gemstones labeled $1$ through $N$.

You can perform the following operation any number of times (possibly zero).

- Select a positive integer $x$, and smash all the gems labeled with multiples of $x$.

Then, for each $i$, if the gem labeled $i$ remains without getting smashed, you will receive $a_i$ yen (the currency of Japan).
However, $a_i$ may be negative, in which case you will be charged money.

By optimally performing the operation, how much yen can you earn?

## Constraints

- All input values are integers.
- $1 \leq N \leq 100$
- $|a_i| \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the maximum amount of money that can be earned.

```input1
6
1 2 -6 4 5 3
```

```output1
12
```

It is optimal to smash Gem $3$ and $6$.

```input2
6
100 -100 -100 -100 100 -100
```

```output2
200
```

```input3
5
-1 -2 -3 -4 -5
```

```output3
0
```

It is optimal to smash all the gems.

```input4
2
-1000 100000
```

```output4
99000
```