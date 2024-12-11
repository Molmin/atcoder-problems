Score : $300$ points

## Problem Statement

You have $N$ socks. The color of the $i$-th sock is $A_i$.

You want to perform the following operation as many times as possible. How many times can it be performed at most?

- Choose two same-colored socks that are not paired yet, and pair them.

## Constraints

- $1\leq N \leq 5\times 10^5$
- $1\leq A_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print an integer representing the answer.

```input1
6
4 1 7 4 1 4
```

```output1
2
```

You can do the operation twice as follows.

- Choose two socks with the color $1$ and pair them.
- Choose two socks with the color $4$ and pair them.

Then, you will be left with one sock with the color $4$ and another with the color $7$, so you can no longer do the operation.
There is no way to do the operation three or more times, so you should print $2$.

```input2
1
158260522
```

```output2
0
```

```input3
10
295 2 29 295 29 2 29 295 2 29
```

```output3
4
```