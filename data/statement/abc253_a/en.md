Score : $100$ points

## Problem Statement

Given integers $a$, $b$, and $c$, determine if $b$ is the median of these integers.

## Constraints

- $1 \leq a, b, c \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$

## Output

If $b$ is the median of the given integers, then print `Yes`; otherwise, print `No`.

```input1
5 3 2
```

```output1
Yes
```

The given integers are $2, 3, 5$ when sorted in ascending order, of which $b$ is the median.

```input2
2 5 3
```

```output2
No
```

$b$ is not the median of the given integers.

```input3
100 100 100
```

```output3
Yes
```