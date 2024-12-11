Score : $300$ points

## Problem Statement

There are $N$ people, numbered from $1$ to $N$, who participated in a round-trip race between two points. The following information is recorded about this race.

- The **outward** times of any two people were different, and person $i$ $(1 \leq i \leq N)$ had the $i$-th fastest outward time.
- The **round-trip** times (the sum of the outward and return times) of any two people were different, and person $i$ $(1 \leq i \leq N)$ had the $P_i$-th fastest round-trip time.
- The person (or persons) with the fastest **return** time was awarded the **fastest return award**.

Here, $P_1, P_2, \dots, P_N$ is a permutation of $1, 2, \dots, N$.

How many people could have received the **fastest return award**?

There are $T$ test cases. Answer each of them.

## Constraints

- $1 \leq T \leq 500$
- $2 \leq N \leq 10^3$
- $P_1, P_2, \dots, P_N$ is a permutation of $1, 2, \dots, N$.
- All input values are integers.
- The sum of $N$ over all test cases in a single input is at most $10^3$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case, $\mathrm{case}_i\ (1 \leq i \leq T)$, is given in the following format:

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

Print $T$ lines. The $i$-th line $(1 \leq i \leq T)$ should contain the answer for the $i$-th test case.

```input1
3
2
2 1
4
1 2 3 4
20
13 2 7 1 5 9 3 4 12 10 15 6 8 14 20 16 19 18 11 17
```

```output1
1
4
7
```

- In the first test case, two people participated in the race, and person $2$ overtook person $1$ on the return leg. In this case, the fastest return award is awarded to person $2$.
- In the second test case, the rankings did not change on the return leg, so any person could have received the fastest return award.