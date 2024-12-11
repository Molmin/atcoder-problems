Score : $100$ points

## Problem Statement

There is a right triangle $ABC$ with $\angle ABC=90^\circ$.

Given the lengths of the three sides, $|AB|,|BC|$ and $|CA|$, find the area of the right triangle $ABC$.

It is guaranteed that the area of the triangle $ABC$ is an integer.

## Constraints

- $1 \leq |AB|,|BC|,|CA| \leq 100$
- All values in input are integers.
- The area of the triangle $ABC$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $|AB|$ $|BC|$ $|CA|$

## Output

Print the area of the triangle $ABC$.

```input1
3 4 5
```

```output1
6
```

![tri](https://img.atcoder.jp/ghi/44c1d4cbdf4677ce3b08ca70b5ce98ea.png)

This triangle has an area of $6$.

```input2
5 12 13
```

```output2
30
```

This triangle has an area of $30$.

```input3
45 28 53
```

```output3
630
```

This triangle has an area of $630$.