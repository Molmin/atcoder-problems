Score : $300$ points

## Problem Statement

The season for Snuke Festival has come again this year. First of all, Ringo will perform a ritual to summon Snuke. For the ritual, he needs an altar, which consists of three parts, one in each of the three categories: upper, middle and lower.

He has $N$ parts for each of the three categories. The size of the $i$-th upper part is $A_i$, the size of the $i$-th middle part is $B_i$, and the size of the $i$-th lower part is $C_i$.

To build an altar, the size of the middle part must be strictly greater than that of the upper part, and the size of the lower part must be strictly greater than that of the middle part. On the other hand, any three parts that satisfy these conditions can be combined to form an altar.

How many different altars can Ringo build? Here, two altars are considered different when at least one of the three parts used is different.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9(1\leq i\leq N)$
- $1 \leq B_i \leq 10^9(1\leq i\leq N)$
- $1 \leq C_i \leq 10^9(1\leq i\leq N)$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $...$ $A_N$
> 
> $B_1$ $...$ $B_N$
> 
> $C_1$ $...$ $C_N$

## Output

Print the number of different altars that Ringo can build.

```input1
2
1 5
2 4
3 6
```

```output1
3
```

The following three altars can be built:

- Upper: $1$-st part, Middle: $1$-st part, Lower: $1$-st part
- Upper: $1$-st part, Middle: $1$-st part, Lower: $2$-nd part
- Upper: $1$-st part, Middle: $2$-nd part, Lower: $2$-nd part

```input2
3
1 1 1
2 2 2
3 3 3
```

```output2
27
```

```input3
6
3 14 159 2 6 53
58 9 79 323 84 6
2643 383 2 79 50 288
```

```output3
87
```