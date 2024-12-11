Score : $400$ points

## Problem Statement

We have a rectangular room that is $H$ meters long and $W$ meters wide.<br>
We will cover this room with $A$ indistinguishable $2$ meters $\times$ $1$ meters rectangular tatami mats and $B$ indistinguishable $1$ meter $\times$ $1$ meter square tatami mats.
The rectangular mats can be used in either direction: they can be $2$ meters long and $1$ meter wide, or $1$ meter long and $2$ meters wide.<br>
How many ways are there to do this?<br>
Here, it is guaranteed that $2A + B = HW$, and two ways are distinguished if they match only after rotation, reflection, or both.

## Constraints

- All values in input are integers.
- $1 \leq H, W$
- $HW \leq 16$
- $0 \leq A, B$
- $2A + B = HW$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $A$ $B$

## Output

Print the answer.

```input1
2 2 1 2
```

```output1
4
```

There are four ways as follows:

![](https://img.atcoder.jp/ghi/d01b63c75c91bd87a73e9a4cc43dda28.png)

```input2
3 3 4 1
```

```output2
18
```

There are six ways as follows, and their rotations.

![](https://img.atcoder.jp/ghi/b7a492abe22e30683e8f9a7b309acd52.png)

```input3
4 4 8 0
```

```output3
36
```