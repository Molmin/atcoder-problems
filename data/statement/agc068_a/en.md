Score : $900$ points

## Problem Statement

There is a circle with circumference $L$, and $L$ people are standing equally spaced along the circumference.
They are labeled as person $0, 1, \cdots, L-1$ in clockwise order.
Consider choosing $N$ from these $L$ people.
The **cost** of a choice is defined as follows.

- For every pair of persons among the $N$ chosen people, find the minimum distance one person has to move along the circumference to reach the other person's position.
The maximum value among these distances is the cost.

Find the sum of costs over all possible choices, modulo $998244353$.

## Constraints

- $2 \leq N \leq L \leq 10^6$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $L$ $N$

## Output

Print the answer.

```input1
4 2
```

```output1
8
```

The choices of $N$ people and their corresponding costs are as follows:

- $(0,1)$: cost $1$
- $(0,2)$: cost $2$
- $(0,3)$: cost $1$
- $(1,2)$: cost $1$
- $(1,3)$: cost $2$
- $(2,3)$: cost $1$

The sum of these costs, $8$, is the answer.

```input2
5 5
```

```output2
2
```

We can only choose all of them.
In this case, the cost is $2$.

```input3
13 5
```

```output3
7618
```

```input4
1000000 100000
```

```output4
664396470
```