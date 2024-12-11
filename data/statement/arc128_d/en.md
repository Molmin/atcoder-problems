Score : $700$ points

## Problem Statement

We have $N$ balls arranged in a row, numbered $1$ to $N$ from left to right.
Ball $i$ has an integer $A_i$ written on it.

You can do the following operation any number of times.

- Choose three consecutive balls $x, y, z$ $(1 \leq x &lt; y &lt; z \leq N$).
Here, $A_x \neq A_y$ and $A_y \neq A_z$ must hold.
Then, eat Ball $y$.
After this operation, Balls $x$ and $z$ are considered adjacent.

Find the number of possible sets of balls remaining in the end, modulo $998244353$.

## Constraints

- $2 \leq N \leq 200000$
- $1 \leq A_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
4
1 2 1 2
```

```output1
3
```

There are three possible sets of balls remaining in the end: $\{1,2,3,4\},\{1,2,4\},\{1,3,4\}$.

```input2
5
5 4 3 2 1
```

```output2
8
```

Different sequences of operations are not distinguished if they result in the same set of balls.

```input3
5
1 2 3 2 1
```

```output3
8
```

Different sets of remaining balls are distinguished even if they have the same sequence of integers written on them.

```input4
9
1 4 2 2 9 6 9 6 6
```

```output4
14
```