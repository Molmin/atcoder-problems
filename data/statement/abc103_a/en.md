Score : $100$ points

## Problem Statement

You have three tasks, all of which need to be completed.

First, you can complete any one task at cost $0$.

Then, just after completing the $i$-th task, you can complete the $j$-th task at cost $|A_j - A_i|$.

Here, $|x|$ denotes the absolute value of $x$.

Find the minimum total cost required to complete all the task.

## Constraints

- All values in input are integers.
- $1 \leq A_1, A_2, A_3 \leq 100$

## Input

Input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$

## Output

Print the minimum total cost required to complete all the task.

```input1
1 6 3
```

```output1
5
```

When the tasks are completed in the following order, the total cost will be $5$, which is the minimum:

- Complete the first task at cost $0$.
- Complete the third task at cost $2$.
- Complete the second task at cost $3$.

```input2
11 5 5
```

```output2
6
```

```input3
100 100 100
```

```output3
0
```