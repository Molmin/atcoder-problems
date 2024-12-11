Score : $700$ points

## Problem Statement

You are given integer sequences of length $N$: $A=(A_1, A_2, \dots, A_N)$ and $B=(B_1, B_2, \dots, B_N)$.

You may perform the following operation any number of times:

- Choose an integer $i\ (1 \leq i \leq N-2)$ such that $A_i+A_{i+1}+A_{i+2}$ is even. Then, rearrange $A_i$, $A_{i+1}$, $A_{i+2}$ as you like.

Determine whether it is possible to make $A$ equal $B$.

## Constraints

- $3 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq 2 \times 10^5$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

If it is possible to make $A$ equal $B$, print `Yes`; otherwise, print `No`.

```input1
5
1 2 3 4 5
3 1 2 4 5
```

```output1
Yes
```

$A_1+A_2+A_3$ is $1+2+3=6$, which is even, so you can choose $i=1$.

If you choose $i=1$ and rearrange $A_1, A_2, A_3$ into $A_3, A_1, A_2$, then $A$ becomes $(3, 1, 2, 4, 5)$.

Now $A$ equals $B$, so you should print `Yes`.

```input2
5
1 2 4 6 5
5 1 4 2 6
```

```output2
No
```

```input3
9
2 10 4 3 6 2 6 8 5
2 4 10 3 8 6 6 2 5
```

```output3
Yes
```