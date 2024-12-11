Score : $200$ points

## Problem Statement

Takahashi has $N$ days of summer vacation.

His teacher gave him $M$ summer assignments. It will take $A_i$ days for him to do the $i$-th assignment.

He cannot do multiple assignments on the same day, or hang out on a day he does an assignment.

What is the maximum number of days Takahashi can hang out during the vacation if he finishes all the assignments during this vacation?

If Takahashi cannot finish all the assignments during the vacation, print `-1` instead.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq M \leq 10^4$
- $1 \leq A_i \leq 10^4$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $...$ $A_M$

## Output

Print the maximum number of days Takahashi can hang out during the vacation, or `-1`.

```input1
41 2
5 6
```

```output1
30
```

For example, he can do the first assignment on the first $5$ days, hang out on the next $30$ days, and do the second assignment on the last $6$ days of the vacation. In this way, he can safely spend $30$ days hanging out.

```input2
10 2
5 6
```

```output2
-1
```

He cannot finish his assignments.

```input3
11 2
5 6
```

```output3
0
```

He can finish his assignments, but he will have no time to hang out.

```input4
314 15
9 26 5 35 8 9 79 3 23 8 46 2 6 43 3
```

```output4
9
```