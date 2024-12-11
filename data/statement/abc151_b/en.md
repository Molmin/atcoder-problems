Score : $200$ points

## Problem Statement

Takahashi is taking exams on $N$ subjects. The score on each subject will be an integer between $0$ and $K$ (inclusive).

He has already taken exams on $N-1$ subjects and scored $A_i$ points on the $i$-th subject.

His goal is to achieve the average score of $M$ points or above on the $N$ subjects.

Print the minimum number of points Takahashi needs on the final subject to achieve his goal.

If the goal is unachievable, print `-1` instead.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq K \leq 100$
- $1 \leq M \leq K$
- $0 \leq A_i \leq K$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $M$
> 
> $A_1$ $A_2$ $...$ $A_{N-1}$

## Output

Print the minimum number of points required on the final subject, or `-1`.

```input1
5 10 7
8 10 3 6
```

```output1
8
```

If he scores $8$ points on the final subject, his average score will be $(8+10+3+6+8)/5 = 7$ points, which meets the goal.

```input2
4 100 60
100 100 100
```

```output2
0
```

Scoring $0$ points on the final subject still meets the goal.

```input3
4 100 60
0 0 0
```

```output3
-1
```

He can no longer meet the goal.