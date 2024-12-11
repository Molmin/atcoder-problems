Score : $200$ points

## Problem Statement

$N$ friends of Takahashi has come to a theme park.

To ride the most popular roller coaster in the park, you must be at least $K$ centimeters tall.

The $i$-th friend is $h_i$ centimeters tall.

How many of the Takahashi's friends can ride the roller coaster?

## Constraints

- $1 \le N \le 10^5$
- $1 \le K \le 500$
- $1 \le h_i \le 500$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $h_1$ $h_2$ $\ldots$ $h_N$

## Output

Print the number of people among the Takahashi's friends who can ride the roller coaster.

```input1
4 150
150 140 100 200
```

```output1
2
```

Two of them can ride the roller coaster: the first and fourth friends.

```input2
1 500
499
```

```output2
0
```

```input3
5 1
100 200 300 400 500
```

```output3
5
```