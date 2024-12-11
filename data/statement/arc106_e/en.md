Score : $700$ points

## Problem Statement

You run a shop employing $N$ employees.
Each employee comes to work in a fixed cycle.
More specifically, starting today, the $i$-th employee repeats the following: working for $A_i$ consecutive days and then taking $A_i$ consecutive days off.

Every day starting today, you will come to work and give a medal to an employee of your choice who comes to work that day. (If no employee comes to work, you will do nothing that day.)

At least how many days does it takes to give every employee $K$ or more medals?

## Constraints

- All values in input are integers.
- $1 \le N \le 18$
- $1 \le K \le 10^5$
- $1 \le A_i \le 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3 3
1 2 3
```

```output1
10
```

For example, you can choose to give them medals as follows:

- Give a medal to the $1$-st employee on the $1$-st, $5$-th, and $9$-th days.
- Give a medal to the $2$-nd employee on the $2$-nd, $6$-th, and $10$-th days.
- Give a medal to the $3$-rd employee on the $3$-rd, $7$-th, and $8$-th days.

Since no employee comes to work on the $4$-th day, this is one of the ways to achieve the objective in the minimum number of days.

```input2
10 10
1 1 1 1 1 1 1 1 1 1
```

```output2
199
```

```input3
2 5
1234 5678
```

```output3
10
```