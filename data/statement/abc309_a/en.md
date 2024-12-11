Score : $100$ points

## Problem Statement

We have the following $3 \times 3$ board with integers from $1$ through $9$ written on it.

![](https://img.atcoder.jp/abc309/86862b285a60054303435965fe642c67.jpg)

You are given two integers $A$ and $B$ between $1$ and $9$, where $A &lt; B$.

Determine if the two squares with $A$ and $B$ written on them are adjacent horizontally.

## Constraints

- $1 \le A &lt; B \le 9$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print `Yes` if the two squares with $A$ and $B$ written on them are adjacent horizontally, and `No` otherwise.

```input1
7 8
```

```output1
Yes
```

The two squares with $7$ and $8$ written on them are adjacent horizontally, so print `Yes`.

```input2
1 9
```

```output2
No
```

```input3
3 4
```

```output3
No
```