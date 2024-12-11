Score : $1000$ points

## Problem Statement

There are $N$ balls in a row.
Initially, the $i$-th ball from the left has the integer $A_i$ written on it.

When Snuke cast a spell, the following happens:

- Let the current number of balls be $k$. All the balls with $k$ written on them disappear at the same time.

Snuke's objective is to vanish all the balls by casting the spell some number of times.
This may not be possible as it is. If that is the case, he would like to modify the integers on the minimum number of balls to make his objective achievable.

By the way, the integers on these balls sometimes change by themselves.
There will be $M$ such changes. In the $j$-th change, the integer on the $X_j$-th ball from the left will change into $Y_j$.

After each change, find the minimum number of modifications of integers on the balls Snuke needs to make if he wishes to achieve his objective before the next change occurs. We will assume that he is quick enough in modifying integers. Here, note that he does not actually perform those necessary modifications and leaves them as they are.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq M \leq 200000$
- $1 \leq A_i \leq N$
- $1 \leq X_j \leq N$
- $1 \leq Y_j \leq N$

## Subscore

- In the test set worth $500$ points, $N \leq 200$ and $M \leq 200$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ ... $A_N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> :
> 
> $X_M$ $Y_M$

## Output

Print $M$ lines.
The $j$-th line should contain the minimum necessary number of modifications of integers on the balls to make Snuke's objective achievable.

```input1
5 3
1 1 3 4 5
1 2
2 5
5 4
```

```output1
0
1
1
```

- After the first change, the integers on the balls become $2$, $1$, $3$, $4$, $5$, from left to right. Here, all the balls can be vanished by casting the spell five times. Thus, no modification is necessary.
- After the second change, the integers on the balls become $2$, $5$, $3$, $4$, $5$, from left to right. In this case, at least one modification must be made. One optimal solution is to modify the integer on the fifth ball from the left to $2$, and cast the spell four times.
- After the third change, the integers on the balls become $2$, $5$, $3$, $4$, $4$, from left to right. Also in this case, at least one modification must be made. One optimal solution is to modify the integer on the third ball from the left to $2$, and cast the spell three times.

```input2
4 4
4 4 4 4
4 1
3 1
1 1
2 1
```

```output2
0
1
2
3
```

```input3
10 10
8 7 2 9 10 6 6 5 5 4
8 1
6 3
6 2
7 10
9 7
9 9
2 4
8 1
1 8
7 7
```

```output3
1
0
1
2
2
3
3
3
3
2
```