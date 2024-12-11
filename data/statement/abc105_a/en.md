Score : $100$ points

## Problem Statement

Takahashi has decided to distribute $N$ AtCoder Crackers to $K$ users of as evenly as possible.
When all the crackers are distributed, find the minimum possible (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user.

## Constraints

- $1 \leq N,K \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the minimum possible (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user.

```input1
7 3
```

```output1
1
```

When the users receive two, two and three crackers, respectively, the (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user, is $1$.

```input2
100 10
```

```output2
0
```

The crackers can be distributed evenly.

```input3
1 1
```

```output3
0
```