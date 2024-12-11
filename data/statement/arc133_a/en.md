Score : $300$ points

## Problem Statement

Given is a sequence of $N$ integers $A=(A_1,A_2,\cdots,A_N)$.

Snuke now chooses a value in $A$.
Let $x$ be the value chosen.
Then, he makes an integer sequence $a$ by lining up all elements of $A$ that are not $x$ without changing the order.

Find the lexicographically smallest sequence that can be obtained as $a$.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq A_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the elements of the lexicographically smallest $a$, separated by spaces.

```input1
5
2 4 4 1 2
```

```output1
2 1 2
```

For example, when $x=2$, we will have $a=(4,4,1)$.
When $x=4$, we will have $a=(2,1,2)$, which is the lexicographically smallest.

```input2
3
1 1 1
```

```output2

```

When $x=1$, $a$ will be empty, which is obviously the lexicographically smallest.
As a side note, the output may contain additional spaces or newlines.

```input3
5
1 1 2 3 3
```

```output3
1 1 2
```