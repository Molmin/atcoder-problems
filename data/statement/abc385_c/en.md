Score : $350$ points

## Problem Statement

There are $N$ buildings arranged in a line at equal intervals. The height of the $i$-th building from the front is $H_i$.

You want to decorate some of these buildings with illuminations so that both of the following conditions are satisfied:

- The chosen buildings all have the same height.
- The chosen buildings are arranged at equal intervals.

What is the maximum number of buildings you can choose? If you choose exactly one building, it is considered to satisfy the conditions.

## Constraints

- $1 \leq N \leq 3000$
- $1 \leq H_i \leq 3000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $H_1$ $\ldots$ $H_N$

## Output

Print the answer.

```input1
8
5 7 5 7 7 5 7 7
```

```output1
3
```

Choosing the 2nd, 5th, and 8th buildings from the front satisfies the conditions.

```input2
10
100 200 300 400 500 600 700 800 900 1000
```

```output2
1
```

Choosing just one building is considered to satisfy the conditions.

```input3
32
3 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6 2 6 4 3 3 8 3 2 7 9 5
```

```output3
3
```