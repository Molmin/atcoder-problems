Score : $100$ points

## Problem Statement

Takahashi and Aoki are playing baseball. Takahashi is the pitcher, and Aoki is the batter.<br>
Takahashi can throw an invisible pitch. When he throws it, the ball moves linearly at a constant speed $V \, \mathrm{m / s}$, and it becomes invisible between the moment $T$ seconds after throwing and the moment $S$ seconds after throwing (inclusive). The ball keeps moving when it is invisible.<br>
If the ball is not invisible at the moment the ball is exactly $D \, \mathrm{m}$ away from Takahashi, Aoki can hit the ball. Otherwise, he cannot hit it.
Can Aoki hit the ball?

## Constraints

- $1 \le V \le 1000$
- $1 \le T \lt S \le 1000$
- $1 \le D \le 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $V$ $T$ $S$ $D$

## Output

If Aoki can hit the ball, print `Yes`; otherwise, print `No`.

```input1
10 3 5 20
```

```output1
Yes
```

The ball is exactly $20 \, \mathrm{m}$ away from Takahashi at $2$ seconds after throwing.<br>
On the other hand, the ball becomes invisible between $3$ and $5$ seconds (inclusive) after throwing, so Aoki can hit the ball.

```input2
10 3 5 30
```

```output2
No
```

Note that the ball is also invisible at $T$ seconds and $S$ seconds after throwing.<br>
Here, the ball is exactly $D \, \mathrm{m}$ away from Takahashi at $T$ seconds after throwing, so the ball is invisible and cannot be hit by Aoki.