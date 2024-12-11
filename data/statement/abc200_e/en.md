Score : $500$ points

## Problem Statement

Takahashi, a pastry chef at *ABC Confiserie*, has decided to make cakes to celebrate AtCoder Beginner Contest 200.

A cake made by Takahashi has three parameters: *beauty*, *taste*, and *popularity*, each of which is represented by an integer between $1$ and $N$ (inclusive).

He has made a cake of beauty $i$, taste $j$, and popularity $k$ for every triple $(i,j,k)\ (1 \le i,j,k \le N)$.<br>
Then, he has arranged these $N^3$ cakes in a row, as follows:

- The cakes are in ascending order of sum of beauty, taste, and popularity from left to right.
- For two cakes with the same sum of beauty, taste, and popularity, the cake with the smaller beauty is to the left.
- For two cakes with the same sum and the same beauty, the cake with the smaller taste is to the left.

Find the beauty, taste, and popularity of the $K$-th cake from the left.

## Constraints

- All values in input are integers.
- $1 \le N \le 10^6$
- $1 \le K \le N^3$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print three integers representing the cake's beauty, taste, popularity, in this order, with spaces in between.

```input1
2 5
```

```output1
1 2 2
```

The cakes are in the following order:

$(1,1,1),(1,1,2),(1,2,1),(2,1,1),(1,2,2),(2,1,2),(2,2,1),(2,2,2)$.

Here, each triple of integers represents the beauty, taste, and popularity of a cake.

```input2
1000000 1000000000000000000
```

```output2
1000000 1000000 1000000
```

The values in input may be large.

```input3
9 47
```

```output3
3 1 4
```