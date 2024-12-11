Score : $700$ points

## Problem Statement

You are given integers $N$ and $K$.
Determine whether there exists a permutation $P=(P_0,P_1,\cdots,P_{2^N-1})$ of $(0,1,\cdots,2^N-1)$ satisfying the condition below, and construct one such sequence if it exists. Note that $P$ is $0$-indexed.

- For every $i$ ($0 \leq i \leq 2^N-1$), $P_i$ and $P_{i+1 \mod 2^N}$ differ by exactly $K$ bits in binary representation.
The comparison is made after zero-padding both integers to $N$ bits.

## Constraints

- $1 \leq K \leq N \leq 18$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

If there is no $P$ satisfying the condition, print `No`.
If there is such a $P$, print it in the following format:

> Yes
> 
> $P_0$ $P_1$ $\cdots$ $P_{2^N-1}$

If there are multiple solutions satisfying the condition, printing any of them will be accepted.

```input1
3 1
```

```output1
Yes
0 1 3 2 6 7 5 4
```

Here, we have $P=(000,001,011,010,110,111,101,100)$ in binary representation.

We can see that $P_1=001$ and $P_2=011$, for example, differ by exactly $1$ bit, satisfying the condition for $i=1$.
The same goes for every $i$.

```input2
2 2
```

```output2
No
```