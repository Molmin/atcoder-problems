Score : $100$ points

## Problem Statement

You are given a sequence of three numbers: $A=(A_1,A_2,A_3)$.

Is it possible to rearrange the elements of $A$ into an arithmetic sequence?

In other words, is it possible to rearrange the elements of $A$ so that $A_3-A_2=A_2-A_1$?

## Constrains

- $1 \leq A_i \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$

## Output

If it is possible to rearrange the elements of $A$ into an arithmetic sequence, print `Yes`; otherwise, print `No`.

```input1
5 1 3
```

```output1
Yes
```

We can rearrange them into an arithmetic sequence by, for example, making it $(1,3,5)$.

```input2
1 4 3
```

```output2
No
```

There is no way to rearrange them into an arithmetic sequence.

```input3
5 5 5
```

```output3
Yes
```

All elements of $A$ may be equal, or $A$ may be an arithmetic sequence already.