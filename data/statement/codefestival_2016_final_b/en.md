Score : $300$ points

## Problem Statement

The problem set at *CODE FESTIVAL 20XX Finals* consists of $N$ problems.

The score allocated to the $i$-th $(1 \leq i \leq N)$ problem is $i$ points.

Takahashi, a contestant, is trying to score exactly $N$ points. For that, he is deciding which problems to solve.

As problems with higher scores are harder, he wants to minimize the highest score of a problem among the ones solved by him.

Determine the set of problems that should be solved.

## Constraints

- $1 \leq N \leq 10^7$

## Partial Score

- $200$ points will be awarded for passing the test set satisfying $1 \leq N \leq 1000$.
- Additional $100$ points will be awarded for passing the test set without additional constraints.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Among the sets of problems with the total score of $N$, find a set in which the highest score of a problem is minimum, then print the indices of the problems in the set in any order, one per line.

If there exists more than one such set, any of them will be accepted.

```input1
4
```

```output1
1
3
```

Solving only the $4$-th problem will also result in the total score of $4$ points, but solving the $1$-st and $3$-rd problems will lower the highest score of a solved problem.

```input2
7
```

```output2
1
2
4
```

The set $\{3,4\}$ will also be accepted.

```input3
1
```

```output3
1
```