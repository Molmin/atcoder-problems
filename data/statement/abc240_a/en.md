Score : $100$ points

## Problem Statement

In the figure shown in the image below, are the points numbered $a$ and $b$ directly connected by a line segment?

![](https://img.atcoder.jp/ghi/04f0c8fb8aabbbb4db7aa5d6f8557de3.png)

## Constraints

- $1 \leq a \lt b \leq 10$
- $a$ and $b$ are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$

## Output

If the points numbered $a$ and $b$ are directly connected by a line segment, print `Yes`; otherwise, print `No`.<br>
The judge is **case-sensitive**: be sure to print uppercase and lowercase letters correctly.

```input1
4 5
```

```output1
Yes
```

In the figure shown in the Problem Statement, the points numbered $4$ and $5$ are directly connected by a line segment.<br>
Thus, `Yes` should be printed.

```input2
3 5
```

```output2
No
```

In the figure shown in the Problem Statement, the points numbered $3$ and $5$ are not directly connected by a line segment.<br>
Thus, `No` should be printed.

```input3
1 10
```

```output3
Yes
```