Score : $400$ points

## Problem Statement

You are given an integer sequence of length $N$ consisting of $0$ and $1$: $A=(A_1,A_2,\cdots,A_N)$.

You will do the operation below exactly once.

- Choose a **contiguous** subsequence of $A$ and flip the elements in it: convert $0$ to $1$ and vice versa.
Here, you may choose an empty subsequence, in which case the elements of $A$ do not change.

Your score will be the number of $1$'s in $A$.
How many values are there that your score can take?

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $0 \leq A_i \leq 1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
4
0 1 1 0
```

```output1
4
```

There are four possible values for your score: $0, 1, 2, 3$.
For example, if you flip the $2$-nd through $4$-th elements of $A$, you will get $A=(0,0,0,1)$, for a score of $1$.

```input2
5
0 0 0 0 0
```

```output2
6
```

```input3
6
0 1 0 1 0 1
```

```output3
3
```