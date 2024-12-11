Score : $100$ points

## Problem Statement

Determine if there is a segment that directly connects the points numbered $a$ and $b$ in the figure below.

![](https://img.atcoder.jp/abc285/080021a4ef4143f82d024ce3b4cfd00f.png)

## Constraints

- $1 \leq a \lt b \leq 15$
- $a$ and $b$ are integers.

## Input

The input is given from Standard Input in the following format:

> $a$ $b$

## Output

Print `Yes` if there is a segment that directly connects the points numbered $a$ and $b$; print `No` otherwise.

```input1
1 2
```

```output1
Yes
```

In the figure in the Problem Statement, there is a segment that directly connects the points numbered $1$ and $2$, so `Yes` should be printed.

```input2
2 8
```

```output2
No
```

In the figure in the Problem Statement, there is no segment that directly connects the points numbered $2$ and $8$, so `No` should be printed.

```input3
14 15
```

```output3
No
```