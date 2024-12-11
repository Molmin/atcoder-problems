Score : $100$ points

## Problem Statement

We have a sandglass that runs for $X$ seconds. The sand drops from the upper bulb at a rate of $1$ gram per second. That is, the upper bulb initially contains $X$ grams of sand.

How many grams of sand will the upper bulb contains after $t$ seconds?

## Constraints

- $1 \leq X \leq 10^9$
- $1 \leq t \leq 10^9$
- $X$ and $t$ are integers.

## Input

The input is given from Standard Input in the following format:

> $X$ $t$

## Output

Print the number of sand in the upper bulb after $t$ second.

```input1
100 17
```

```output1
83
```

$17$ out of the initial $100$ grams of sand will be consumed, resulting in $83$ grams.

```input2
48 58
```

```output2
0
```

All $48$ grams of sand will be gone, resulting in $0$ grams.

```input3
1000000000 1000000000
```

```output3
0
```