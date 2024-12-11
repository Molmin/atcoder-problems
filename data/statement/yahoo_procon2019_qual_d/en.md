Score : $600$ points

## Problem Statement

Snuke stands on a number line. He has $L$ ears, and he will walk along the line continuously under the following conditions:

- He never visits a point with coordinate less than $0$, or a point with coordinate greater than $L$.
- He starts walking at a point with integer coordinate, and also finishes walking at a point with integer coordinate.
- He only changes direction at a point with integer coordinate.

Each time when Snuke passes a point with coordinate $i-0.5$, where $i$ is an integer, he put a stone in his $i$-th ear.

After Snuke finishes walking, Ringo will repeat the following operations in some order so that, for each $i$, Snuke's $i$-th ear contains $A_i$ stones:

- Put a stone in one of Snuke's ears.
- Remove a stone from one of Snuke's ears.

Find the minimum number of operations required when Ringo can freely decide how Snuke walks.

## Constraints

- $1 \leq L \leq 2\times 10^5$
- $0 \leq A_i \leq 10^9(1\leq i\leq L)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $L$
> 
> $A_1$
> 
> $:$
> 
> $A_L$

## Output

Print the minimum number of operations required when Ringo can freely decide how Snuke walks.

```input1
4
1
0
2
3
```

```output1
1
```

Assume that Snuke walks as follows:

- He starts walking at coordinate $3$ and finishes walking at coordinate $4$, visiting coordinates $3,4,3,2,3,4$ in this order.

Then, Snuke's four ears will contain $0,0,2,3$ stones, respectively.
Ringo can satisfy the requirement by putting one stone in the first ear.

```input2
8
2
0
0
2
1
3
4
1
```

```output2
3
```

```input3
7
314159265
358979323
846264338
327950288
419716939
937510582
0
```

```output3
1
```