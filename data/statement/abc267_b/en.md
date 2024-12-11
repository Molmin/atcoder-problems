Score : $200$ points

## Problem Statement

Bowling pins are numbered $1$ through $10$.  The following figure is a top view of the arrangement of the pins:

![0](https://img.atcoder.jp/abc267/0a13f586c544118e1a4651d267a594c1.png)

Let us call each part between two dotted lines in the figure a **column**.<br>
For example, Pins $1$ and $5$ belong to the same column, and so do Pin $3$ and $9$.

When some of the pins are knocked down, a special situation called **split** may occur.<br>
A placement of the pins is a split if both of the following conditions are satisfied:

- Pin $1$ is knocked down.
- There are two different columns that satisfy both of the following conditions:-   - Each of the columns has one or more standing pins.
-   - There exists a column between these columns such that all pins in the column are knocked down.

See also Sample Inputs and Outputs for examples.

Now, you are given a placement of the pins as a string $S$ of length $10$.
For $i = 1, \dots, 10$, the $i$-th character of $S$ is `0` if Pin $i$ is knocked down, and is `1` if it is standing.<br>
Determine if the placement of the pins represented by $S$ is a split.

## Constraints

- $S$ is a string of length $10$ consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If the placement of the pins represented by $S$ is a split, print `Yes`; otherwise, print `No`.

```input1
0101110101
```

```output1
Yes
```

In the figure below, the knocked-down pins are painted gray, and the standing pins are painted white:

![ex0](https://img.atcoder.jp/abc267/ec8920ee4b39fac21b10c03e44fa45da.png)

Between the column containing a standing pin $5$ and the column containing a standing pin $6$ is a column containing Pins $3$ and $9$.  Since Pins $3$ and $9$ are both knocked down, the placement is a split.

```input2
0100101001
```

```output2
Yes
```

![ex1](https://img.atcoder.jp/abc267/6ad2c3b72be7f1200386be1fb1eb276c.png)

```input3
0000100110
```

```output3
No
```

![ex2](https://img.atcoder.jp/abc267/2d5b61ba048cf10007ce5b7a984c41a6.png)

This placement is not a split.

```input4
1101110101
```

```output4
No
```

![ex3](https://img.atcoder.jp/abc267/d3aea8dae7928a938605b7a613bb642c.png)

This is not a split because Pin $1$ is not knocked down.