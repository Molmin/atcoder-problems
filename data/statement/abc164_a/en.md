Score : $100$ points

## Problem Statement

There are $S$ sheep and $W$ wolves.

If the number of wolves is greater than or equal to that of sheep, the wolves will attack the sheep.

If the wolves will attack the sheep, print `unsafe`; otherwise, print `safe`.

## Constraints

- $1 \leq S \leq 100$
- $1 \leq W \leq 100$

## Input

Input is given from Standard Input in the following format:

> $S$ $W$

## Output

If the wolves will attack the sheep, print `unsafe`; otherwise, print `safe`.

```input1
4 5
```

```output1
unsafe
```

There are four sheep and five wolves. The number of wolves is not less than that of sheep, so they will attack them.

```input2
100 2
```

```output2
safe
```

Many a sheep drive away two wolves.

```input3
10 10
```

```output3
unsafe
```