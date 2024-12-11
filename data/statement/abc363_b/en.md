Score : $200$ points

## Problem Statement

There are $N$ people, and the current hair length of the $i$-th person $(1 \leq i \leq N)$ is $L_i$.<br>
Each person's hair grows by $1$ per day.

Print the number of days after which the number of people whose hair length is at least $T$ becomes $P$ or more for the first time.<br>
If there are already $P$ or more people whose hair length is at least $T$ now, print $0$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq L_i \leq 100$
- $1 \leq T \leq 100$
- $1 \leq P \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $T$ $P$
> 
> $L_1$ $L_2$ $\ldots$ $L_N$

## Output

Print the number of days after which the number of people whose hair length is at least $T$ becomes $P$ or more for the first time. 
If this condition is already satisfied now, print $0$.

```input1
5 10 3
3 11 1 6 2
```

```output1
7
```

There are five people, and their current hair lengths are $3, 11, 1, 6, 2$, so there is one person whose hair length is at least $10$.

After seven days, the hair lengths of the people will be $10, 18, 8, 13, 9$, respectively, and there will be three people whose hair length is at least $10$.<br>
After six days, there are only two people whose hair length is at least $10$, not satisfying the condition, so print $7$.

```input2
2 5 2
10 10
```

```output2
0
```

Since there are already two people whose hair length is at least $5$ now, satisfying the condition, so print $0$.

```input3
3 10 1
1 2 3
```

```output3
7
```