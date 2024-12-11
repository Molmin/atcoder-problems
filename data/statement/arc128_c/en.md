Score : $600$ points

## Problem Statement

Given are integers $N$, $M$, $S$, and a sequence of $N$ integers $A=(A_1,A_2,\cdots,A_N)$.

Consider making a sequence of $N$ non-negative **real** numbers $x=(x_1,x_2,\cdots,x_N)$ satisfying all of the following conditions:

- $0 \leq x_1 \leq x_2 \leq \cdots \leq x_N \leq M$,
- $\sum_{1 \leq i \leq N} x_i=S$.

Now, let us define the score of $x$ as $\sum_{1 \leq i \leq N} A_i \times x_i$.
Find the maximum possible score of $x$.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq M \leq 10^6$
- $1 \leq S \leq \min(N \times M,10^6)$
- $1 \leq A_i \leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $S$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Constraints

Print the answer.
Your output will be considered correct if its absolute or relative error is at most $10^{-6}$. 

```input1
3 2 3
1 2 3
```

```output1
8.00000000000000000000
```

The optimal choice is $x=(0,1,2)$.

```input2
3 3 2
5 1 1
```

```output2
4.66666666666666666667
```

The optimal choice is $x=(2/3,2/3,2/3)$.

```input3
10 234567 1000000
353239 53676 45485 617014 886590 423581 172670 928532 312338 981241
```

```output3
676780145098.25000000000000000000
```