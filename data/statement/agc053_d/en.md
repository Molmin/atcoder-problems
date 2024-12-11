Score : $1000$ points

## Problem Statement

We have a contest with $N$ participants and $N$ problems.
The participants are numbered $1$ through $N$.
For each pair of a participant and a problem, we know the time it takes for the participant to solve the problem, and it is $1$, $2$, or $3$ minutes.
Among the $N$ problems, there are $A_i$ problems that Participant $i$ takes $1$ minute to solve, $B_i$ problems that s/he takes $2$ minutes to solve, and $C_i$ problems that s/he takes $3$ minutes to solve.

Determine whether it is possible for the following to hold for every $1 \leq i, j \leq N$ when the participants can freely decide the order they solve the problems.

- Let $S$ be the total time Participant $i$ takes to solve the first $i$ problems, and $T$ be the total time Participant $j$ takes to solve the first $i$ problems. Then, we have $S \leq T$.

In other words, determine whether it is possible that Participant $i$ places first (possibly with ties) when they have solved the first $i$ problems, ignoring the time it takes for them to switch between problems.

Given $T$ test cases, solve each of them.

## Constraints

- $1 \leq T \leq 2\times 10^5$
- $1 \leq N \leq 2\times 10^5$
- $0 \leq A_i,B_i,C_i \leq N$
- $A_i+B_i+C_i=N$
- The sum of $N$ over all test cases is at most $2\times 10^5$.

## Input

Input is given from Standard Input in the following format. The first line is as follows:

> $T$

Then, $T$ test cases follow, each in the format below:

> $N$
> 
> $A_1$ $B_1$ $C_1$
> 
> $:$
> 
> $A_N$ $B_N$ $C_N$

## Output

For each test case, print `Yes` if the condition in Problem Statement can be satisfied, and print `No` otherwise.
Use one line for each test case. (The checker is case-insensitive: we will accept both uppercase and lowercase letters.)

```input1
2
3
0 2 1
0 1 2
1 1 1
3
0 2 1
0 0 3
1 1 1
```

```output1
Yes
No
```

In the first test case, one scenario that satisfies the condition is as follows:

- Participant $1$ solves the first problem in $3$ minutes, the second in $2$ minutes, and the third in $2$ minutes;
- Participant $2$ solves the first problem in $3$ minutes, the second in $2$ minutes, and the third in $3$ minutes;
- Participant $3$ solves the first problem in $3$ minutes, the second in $2$ minutes, and the third in $1$ minutes.