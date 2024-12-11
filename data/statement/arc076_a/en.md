Score : $300$ points

## Problem Statement

Snuke has $N$ dogs and $M$ monkeys. He wants them to line up in a row.

As a Japanese saying goes, these dogs and monkeys are on bad terms. *("ken'en no naka", literally "the relationship of dogs and monkeys", means a relationship of mutual hatred.)* Snuke is trying to reconsile them, by arranging the animals so that there are neither two adjacent dogs nor two adjacent monkeys.

How many such arrangements there are? Find the count modulo $10^9+7$ (since animals cannot understand numbers larger than that).
Here, dogs and monkeys are both distinguishable. Also, two arrangements that result from reversing each other are distinguished.

## Constraints

- $1 \leq N,M \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of possible arrangements, modulo $10^9+7$.

```input1
2 2
```

```output1
8
```

We will denote the dogs by `A` and `B`, and the monkeys by `C` and `D`. There are eight possible arrangements: `ACBD`, `ADBC`, `BCAD`, `BDAC`, `CADB`, `CBDA`, `DACB` and `DBCA`.

```input2
3 2
```

```output2
12
```

```input3
1 8
```

```output3
0
```

```input4
100000 100000
```

```output4
530123477
```