Score : $200$ points

## Problem Statement

$N$ people, person $1$, person $2$, $\ldots$, person $N$, are playing roulette.
The outcome of a spin is one of the $37$ integers from $0$ to $36$.
For each $i = 1, 2, \ldots, N$, person $i$ has bet on $C_i$ of the $37$ possible outcomes: $A_{i, 1}, A_{i, 2}, \ldots, A_{i, C_i}$.

The wheel has been spun, and the outcome is $X$.
Print the numbers of all people who have bet on $X$ with the fewest bets, in **ascending order**.

More formally, print all integers $i$ between $1$ and $N$, inclusive, that satisfy both of the following conditions, in **ascending order**:

- Person $i$ has bet on $X$.
- For each $j = 1, 2, \ldots, N$, if person $j$ has bet on $X$, then $C_i \leq C_j$.

Note that there may be no number to print (see Sample Input 2).

## Constraints

- $1 \leq N \leq 100$
- $1 \leq C_i \leq 37$
- $0 \leq A_{i, j} \leq 36$
- $A_{i, 1}, A_{i, 2}, \ldots, A_{i, C_i}$ are all different for each $i = 1, 2, \ldots, N$.
- $0 \leq X \leq 36$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $C_1$
> 
> $A_{1, 1}$ $A_{1, 2}$ $\ldots$ $A_{1, C_1}$
> 
> $C_2$
> 
> $A_{2, 1}$ $A_{2, 2}$ $\ldots$ $A_{2, C_2}$
> 
> $\vdots$
> 
> $C_N$
> 
> $A_{N, 1}$ $A_{N, 2}$ $\ldots$ $A_{N, C_N}$
> 
> $X$

## Output

Let $B_1, B_2, \ldots, B_K$ be the sequence of numbers to be printed in **ascending order**.
Using the following format, print the count of numbers to be printed, $K$, on the first line,
and $B_1, B_2, \ldots, B_K$ separated by spaces on the second line:

> $K$
> 
> $B_1$ $B_2$ $\ldots$ $B_K$

```input1
4
3
7 19 20
4
4 19 24 0
2
26 10
3
19 31 24
19
```

```output1
2
1 4
```

The wheel has been spun, and the outcome is $19$.
The people who has bet on $19$ are person $1$, person $2$, and person $4$, and the number of their bets are $3$, $4$, and $3$, respectively.
Therefore, among the people who has bet on $19$, the ones with the fewest bets are person $1$ and person $4$.

```input2
3
1
1
1
2
1
3
0
```

```output2
0
```

The wheel has been spun and the outcome is $0$, but no one has bet on $0$, so there is no number to print.