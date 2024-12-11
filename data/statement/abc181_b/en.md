Score : $200$ points

## Problem Statement

We have a blackboard with nothing written on it.
Takahashi will do $N$ operations to write integers on it.

In the $i$-th operation, he will write each integer from $A_i$ through $B_i$ once, for a total of $B_i - A_i + 1$ integers.

Find the sum of the integers written on the blackboard after the $N$ operations.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq B_i \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the sum of the integers written on the blackboard after the $N$ operations.

```input1
2
1 3
3 5
```

```output1
18
```

In the $1$-st operation, he will write $1$, $2$, and $3$ on the blackboard.

In the $2$-nd operation, he will write $3$, $4$, and $5$ on the blackboard.

The sum of the integers written is $1+2+3+3+4+5=18$.

```input2
3
11 13
17 47
359 44683
```

```output2
998244353
```

```input3
1
1 1000000
```

```output3
500000500000
```