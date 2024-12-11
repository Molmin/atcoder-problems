Score: $400$ points

## Problem Statement

Mr. AtCoder has created a device consisting of $N$ small light bulbs arranged in a row from left to right, and two switches A and B. Each light bulb can be in one of two states: `0` (OFF) and `1` (ON). Pressing each switch causes the following:

- Pressing switch A turns the leftmost light bulb in the `0` state into `1`.
- Pressing switch B turns the leftmost light bulb in the `1` state into `0`.

If there is no applicable light bulb, you cannot press the switch.

Initially, all light bulbs are in the `0` state. He wants the states of the light bulbs to be $S_1, S_2, \dots, S_N$ from left to right. Determine the order and number of times the switches should be pressed to achieve this. It is not necessary to minimize the number of presses, but it should be at most $10^6$ so that the operations can finish in a realistic time. It can be proved that a solution exists under the constraints of this problem.

## Constraints

- $1 \leq N \leq 30$
- Each of $S_1, S_2, \dots, S_N$ is `0` or `1`.
- Not all of $S_1, S_2, \dots, S_N$ are `0`.
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1 S_2 \dots S_N$

Note that the second line is given as a string of length $N$.

## Output

If your solution presses the switches $m$ times $(1 \leq m \leq 10^6)$ in the order $t_1, t_2, \dots, t_m$ (each being `A` or `B`), print those in the following format:

> $m$
> 
> $t_1 t_2 \dots t_m$

The second line should be printed as a string of length $m$.

```input1
5
01100
```

```output1
4
AAAB
```

This sample output presents a solution that presses the switches in the order A, A, A, B. This sets the light bulbs to the desired states, as shown in the figure below:

![](https://img.atcoder.jp/arc177/76af43b23a9e1158288d5f3162174c42.png)

Alternatively, pressing switches in the order A, A, B, A, A, B also sets the light bulbs to the desired states. The following output corresponding to this solution would also be accepted:

```output1
6
AABAAB
```