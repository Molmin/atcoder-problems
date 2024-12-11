Score : $1000$ points

## Problem Statement

Takahashi and Aoki are going to together construct a sequence of integers.

First, Takahashi will provide a sequence of integers $a$, satisfying all of the following conditions:

- The length of $a$ is $N$.
- Each element in $a$ is an integer between $1$ and $K$, inclusive.
- $a$ is a *palindrome*, that is, reversing the order of elements in $a$ will result in the same sequence as the original.

Then, Aoki will perform the following operation an arbitrary number of times:

- Move the first element in $a$ to the end of $a$.

How many sequences $a$ can be obtained after this procedure, modulo $10^9+7$?

## Constraints

- $1 \leq N \leq 10^9$
- $1 \leq K \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of the sequences $a$ that can be obtained after the procedure, modulo $10^9+7$.

```input1
4 2
```

```output1
6
```

The following six sequences can be obtained:

- $(1, 1, 1, 1)$
- $(1, 1, 2, 2)$
- $(1, 2, 2, 1)$
- $(2, 2, 1, 1)$
- $(2, 1, 1, 2)$
- $(2, 2, 2, 2)$

```input2
1 10
```

```output2
10
```

```input3
6 3
```

```output3
75
```

```input4
1000000000 1000000000
```

```output4
875699961
```