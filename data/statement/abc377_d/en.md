Score : $400$ points

## Problem Statement

You are given two sequences of positive integers of length $N$, $L=(L_1,L_2,\ldots,L_N)$ and $R=(R_1,R_2,\ldots,R_N)$, and an integer $M$.

Find the number of pairs of integers $(l,r)$ that satisfy both of the following conditions:

- $1\le l \le r \le M$
- For every $1\le i\le N$, the interval $[l,r]$ does not completely contain the interval $[L_i,R_i]$.

## Constraints

- $1\le N,M\le 2\times 10^5$
- $1\le L_i\le R_i\le M$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Print the answer.

```input1
2 4
1 2
3 4
```

```output1
5
```

The five pairs $(l,r)=(1,1),(2,2),(2,3),(3,3),(4,4)$ satisfy the conditions.

For example, $(l,r)=(1,3)$ does not satisfy the conditions because the interval $[1,3]$ completely contains the interval $[1,2]$.

```input2
6 5
1 1
2 2
3 3
4 4
5 5
1 5
```

```output2
0
```

There may be cases where no pairs of integers satisfy the conditions.

```input3
6 20
8 12
14 20
11 13
5 19
4 11
1 6
```

```output3
102
```