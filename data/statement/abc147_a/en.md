Score : $100$ points

## Problem Statement

Given are three integers $A_1$, $A_2$, and $A_3$.

If $A_1+A_2+A_3$ is greater than or equal to $22$, print `bust`; otherwise, print `win`.

## Constraints

- $1 \leq A_i \leq 13 \ \ (i=1,2,3)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$

## Output

If $A_1+A_2+A_3$ is greater than or equal to $22$, print `bust`; otherwise, print `win`.

```input1
5 7 9
```

```output1
win
```

$5+7+9=21$, so print `win`.

```input2
13 7 2
```

```output2
bust
```

$13+7+2=22$, so print `bust`.