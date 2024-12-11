Score : $400$ points

## Problem Statement

The Republic of ARC has $N$ citizens, all of whom play competitive programming. Each citizen is given a dan *(grade)* which is $1$, $2$, $\ldots$, or $K$, according to their skill.

A national census has revealed that there are exactly $A_i$ citizens with dan $i$. To make this data easier to understand, the king has decided to describe the country as if it were a village of $M$ people.

Set the number of people with dan $i$ in the village, $B_i$, so that $\max_i\left|\frac{B_i}{M} - \frac{A_i}{N}\right|$ is minimized, while satisfying the following:

- each $B_i$ is a non-negative integer, satisfying $\sum_{i=1}^K B_i = M$.

Print one such way to set $B = (B_1, B_2, \ldots, B_K)$.

## Constraints

- $1\leq K\leq 10^5$
- $1\leq N, M\leq 10^9$
- Each $A_i$ is a non-negative integer satisfying $\sum_{i=1}^K A_i = N$.

## Input

Input is given from Standard Input in the following format:

> $K$ $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$

## Output

Print the elements in your integer sequence $B$ satisfying the requirement in one line, with spaces in between.

> $B_1$ $B_2$ $\ldots$ $B_K$

If multiple sequences satisfy the requirement, any of them will be accepted.

```input1
3 7 20
1 2 4
```

```output1
3 6 11
```

In this output, we have $\max_i\left|\frac{B_i}{M} - \frac{A_i}{N}\right| = \max\left(\left|\frac{3}{20}-\frac{1}{7}\right|, \left|\frac{6}{20}-\frac{2}{7}\right|, \left|\frac{11}{20}-\frac{4}{7}\right|\right) = \max\left(\frac{1}{140}, \frac{1}{70}, \frac{3}{140}\right) = \frac{3}{140}$.

```input2
3 3 100
1 1 1
```

```output2
34 33 33
```

Note that $B_1 = B_2 = B_3 = 33$ does not satisfy the requirement, since the sum must be $M = 100$.

In this sample, other than `34 33 33`, printing `33 34 33` or `33 33 34` will also be accepted.

```input3
6 10006 10
10000 3 2 1 0 0
```

```output3
10 0 0 0 0 0
```

```input4
7 78314 1000
53515 10620 7271 3817 1910 956 225
```

```output4
683 136 93 49 24 12 3
```