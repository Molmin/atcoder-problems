Score : $100$ points

## Problem Statement

A biscuit making machine produces $B$ biscuits at the following moments: $A$ seconds, $2A$ seconds, $3A$ seconds and each subsequent multiple of $A$ seconds after activation.

Find the total number of biscuits produced within $T + 0.5$ seconds after activation.

## Constraints

- All values in input are integers.
- $1 \leq A, B, T \leq 20$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $T$

## Output

Print the total number of biscuits produced within $T + 0.5$ seconds after activation.

```input1
3 5 7
```

```output1
10
```

- Five biscuits will be produced three seconds after activation.
- Another five biscuits will be produced six seconds after activation.
- Thus, a total of ten biscuits will be produced within $7.5$ seconds after activation.

```input2
3 2 9
```

```output2
6
```

```input3
20 20 19
```

```output3
0
```