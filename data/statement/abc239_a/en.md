Score : $100$ points

## Problem Statement

Assuming that the horizon seen from a place $x$ meters above the ground is $\sqrt{x(12800000+x)}$ meters away,
find how many meters away the horizon seen from a place $H$ meters above the ground is.

## Constraints

- $1 \leq H \leq 10^5$
- $H$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $H$

## Output

Print the answer.<br>
Your answer will be considered correct when the absolute or relative error from the judge's answer is at most $10^{-6}$.

```input1
333
```

```output1
65287.907678222
```

We have $\sqrt{333(12800000+333)} = 65287.9076782\ldots$.  Outputs such as `65287.91` would also be accepted.

```input2
634
```

```output2
90086.635834623
```

We have $\sqrt{634(12800000+634)} = 90086.6358346\ldots$.