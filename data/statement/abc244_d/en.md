Score : $400$ points

## Problem Statement

There are three Takahashis numbered $1$, $2$ and $3$, and three hats colored red, green, and blue.  Each Takahashi is wearing one hat.  The color of the hat that Takahashi $i$ is currently wearing is represented by a character $S_i$.  Here, `R` corresponds to red, `G` to green, and `B` to blue.  Now, they will do the following operation **exactly** $10^{18}$ times.

### Operation

- Choose two out of the three Takahashis.  The two exchange the hats they are wearing.

Is it possible to make Takahashi $i$ wearing the hat of color corresponding to character $T_i$ after the $10^{18}$ repetitions?

## Constraints

- $S_1, S_2, S_3$ are a permutation of `R`, `G`, `B`.
- $T_1, T_2, T_3$ are a permutation of `R`, `G`, `B`.

## Input

Input is given from Standard Input in the following format:

> $S_1$ $S_2$ $S_3$
> 
> $T_1$ $T_2$ $T_3$

## Output

If it is possible to make Takahashi $i$ wearing the hat of color corresponding to character $T_i$ after the $10^{18}$ repetitions, print `Yes`; otherwise, print `No`.

```input1
R G B
R G B
```

```output1
Yes
```

For example, the objective can be achieved by repeating $10^{18}$ times the operation of swapping the hats of Takahashi $1$ and Takahashi $2$.