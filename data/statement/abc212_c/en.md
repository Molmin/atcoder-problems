Score : $300$ points

## Problem Statement

You are given two sequences: $A=(A_1,A_2, \ldots ,A_N)$ consisting of $N$ positive integers, and $B=(B_1, \ldots ,B_M)$ consisting of $M$ positive integers.

Find the minimum difference of an element of $A$ and an element of $B$, that is, $\displaystyle \min_{ 1\leq i\leq N}\displaystyle\min_{1\leq j\leq M} \lvert A_i-B_j\rvert$.

## Constraints

- $1 \leq N,M \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## Output

Print the answer.

```input1
2 2
1 6
4 9
```

```output1
2
```

Here is the difference for each of the four pair of an element of $A$ and an element of $B$: $\lvert 1-4\rvert=3$, $\lvert 1-9\rvert=8$, $\lvert 6-4\rvert=2$, and $\lvert 6-9\rvert=3$. We should print the minimum of these values, or $2$.

```input2
1 1
10
10
```

```output2
0
```

```input3
6 8
82 76 82 82 71 70
17 39 67 2 45 35 22 24
```

```output3
3
```