Score : $400$ points

## Problem Statement

We have a positive integer $a$. Additionally, there is a blackboard with a number written in base $10$.<br>
Let $x$ be the number on the blackboard. Takahashi can do the operations below to change this number.

- Erase $x$ and write $x$ multiplied by $a$, in base $10$.
- See $x$ as a string and move the rightmost digit to the beginning.<br>
    This operation can only be done when $x \geq 10$ and $x$ is not divisible by $10$.

For example, when $a = 2, x = 123$, Takahashi can do one of the following.

- Erase $x$ and write $x \times a = 123 \times 2 = 246$.
- See $x$ as a string and move the rightmost digit `3` of `123` to the beginning, changing the number from $123$ to $312$.

The number on the blackboard is initially $1$. What is the minimum number of operations needed to change the number on the blackboard to $N$? If there is no way to change the number to $N$, print $-1$.

## Constraints

- $2 \leq a \lt 10^6$
- $2 \leq N \lt 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $N$

## Output

Print the answer.

```input1
3 72
```

```output1
4
```

We can change the number on the blackboard from $1$ to $72$ in four operations, as follows.

- Do the operation of the first type: $1 \to 3$.
- Do the operation of the first type: $3 \to 9$.
- Do the operation of the first type: $9 \to 27$.
- Do the operation of the second type: $27 \to 72$.

It is impossible to reach $72$ in three or fewer operations, so the answer is $4$.

```input2
2 5
```

```output2
-1
```

It is impossible to change the number on the blackboard to $5$.

```input3
2 611
```

```output3
12
```

There is a way to change the number on the blackboard to $611$ in $12$ operations: $1 \to 2 \to 4 \to 8 \to 16 \to 32 \to 64 \to 46 \to 92 \to 29 \to 58 \to 116 \to 611$, which is the minimum possible.

```input4
2 767090
```

```output4
111
```