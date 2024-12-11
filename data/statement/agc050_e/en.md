Score : $1800$ points

## Problem Statement

There are three traffic lights numbered $1, 2, 3$.
Traffic Light $i$ eternally repeats the following pattern: green for $g_i$ seconds, red for $r_i$ seconds, green for $g_i$ seconds, red for $r_i$ seconds, and so on.

All three lights have turned green just now.
During the next $(g_1 + r_1)(g_2 + r_2)(g_3 + r_3)$ seconds, what is the total duration of the time when all lights are green?
Compute the answer modulo $998,244,353$.

## Constraints

- $1 \leq g_1, r_1, g_2, r_2, g_3, r_3 \leq 10^{12}$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $g_1$ $r_1$ $g_2$ $r_2$ $g_3$ $r_3$

## Output

Print the answer.

```input1
1 1 2 1 3 1
```

```output1
8
```

During the next $24$ seconds,

- Light $1$ is green during time intervals $[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14, 15], [16, 17], [18, 19], [20, 21], [22, 23]$.
- Light $2$ is green during time intervals $[0, 2], [3, 5], [6, 8], [9, 11], [12, 14], [15, 17], [18, 20], [21, 23]$.
- Light $3$ is green during time intervals $[0, 3], [4, 7], [8, 11], [12, 15], [16, 19], [20, 23]$.

Thus, all lights are green during time intervals $[0, 1], [4, 5], [6, 7], [10, 11], [12, 13], [16, 17], [18, 19], [22, 23]$.

The total duration is $8$ seconds.

```input2
7 3 5 7 11 4
```

```output2
420
```

```input3
999999999991 999999999992 999999999993 999999999994 999999999995 999999999996
```

```output3
120938286
```