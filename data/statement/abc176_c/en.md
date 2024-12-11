Score : $300$ points

## Problem Statement

$N$ persons are standing in a row. The height of the $i$-th person from the front is $A_i$.

We want to have each person stand on a stool of some heights - at least zero - so that the following condition is satisfied for every person:

Condition: Nobody in front of the person is taller than the person. Here, the height of a person includes the stool.

Find the minimum total height of the stools needed to meet this goal.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the minimum total height of the stools needed to meet the goal.

```input1
5
2 1 5 4 3
```

```output1
4
```

If the persons stand on stools of heights $0$, $1$, $0$, $1$, and $2$, respectively, their heights will be $2$, $2$, $5$, $5$, and $5$, satisfying the condition.

We cannot meet the goal with a smaller total height of the stools.

```input2
5
3 3 3 3 3
```

```output2
0
```

Giving a stool of height $0$ to everyone will work.