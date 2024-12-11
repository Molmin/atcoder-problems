Score : $625$ points

## Problem Statement

There are $N$ cards numbered $1$ through $N$.
Each face of a card has an integer written on it; card $i$ has $A_i$ on its front and $B_i$ on its back.
Initially, all cards are face up.

There are $M$ machines numbered $1$ through $M$.
Machine $j$ has two (not necessarily distinct) integers $X_j$ and $Y_j$ between $1$ and $N$.  If you power up machine $j$,
it flips card $X_j$ with the probability of $\frac{1}{2}$, and flips card $Y_j$ with the remaining probability of $\frac{1}{2}$.
This probability is independent for each power-up.

Snuke will perform the following procedure.

1. Choose a set $S$ consisting of integers from $1$ through $M$.
2. For each element in $S$ in ascending order, power up the machine with that number.

Among Snuke's possible choices of $S$, find the maximum expected value of the sum of the integers written on the face-up sides of the cards after the procedure.

## Constraints

- $1\leq N \leq 40$
- $1\leq M \leq 10^5$
- $1\leq A_i,B_i \leq 10^4$
- $1\leq X_j,Y_j \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$
> 
> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_M$ $Y_M$

## Output

Print the answer.
Your output is considered correct if the absolute or relative difference from the true value is at most $10^{-6}$.

```input1
3 1
3 10
10 6
5 2
1 2
```

```output1
19.500000
```

If $S$ is chosen to be an empty set, no machine is powered up, so the expected sum of the integers written on the face-up sides of the cards after the procedure is $3+10+5=18$.

If $S$ is chosen to be $\lbrace 1 \rbrace$, machine $1$ is powered up.

- If card $X_1 = 1$ is flipped, the expected sum of the integers written on the face-up sides of the cards after the procedure is $10+10+5=25$.
- If card $Y_1 = 2$ is flipped, the expected sum of the integers written on the face-up sides of the cards after the procedure is $3+6+5=14$.

Thus, the expected value is $\frac{25+14}{2} = 19.5$.

Therefore, the maximum expected value of the sum of the integers written on the face-up sides of the cards after the procedure is $19.5$.

```input2
1 3
5 100
1 1
1 1
1 1
```

```output2
100.000000
```

Different machines may have the same $(X_j,Y_j)$.

```input3
8 10
6918 9211
16 1868
3857 8537
3340 8506
6263 7940
1449 4593
5902 1932
310 6991
4 4
8 6
3 5
1 1
4 2
5 6
7 5
3 3
1 5
3 1
```

```output3
45945.000000
```