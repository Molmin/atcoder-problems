Score : $150$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,A_3,A_4,A_5)$ obtained by permuting $(1,2,3,4,5)$.

Determine whether $A$ can be sorted in ascending order by performing **exactly one** operation of swapping two adjacent elements in $A$.

## Constraints

- $A$ is an integer sequence of length $5$ obtained by permuting $(1,2,3,4,5)$.

## Input

The input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$ $A_4$ $A_5$

## Output

If $A$ can be sorted in ascending order by exactly one operation, print `Yes`; otherwise, print `No`.

```input1
1 2 4 3 5
```

```output1
Yes
```

By swapping $A_3$ and $A_4$, $A$ becomes $(1,2,3,4,5)$, so it can be sorted in ascending order. Therefore, print `Yes`.

```input2
5 3 2 4 1
```

```output2
No
```

No matter what operation is performed, it is impossible to sort $A$ in ascending order.

```input3
1 2 3 4 5
```

```output3
No
```

You must perform exactly one operation.

```input4
2 1 3 4 5
```

```output4
Yes
```