Score : $100$ points

## Problem Statement

In order to pass the entrance examination tomorrow, Taro has to study for $T$ more hours.

Fortunately, he can *leap* to World B where time passes $X$ times as fast as it does in our world (World A).

While $(X \times t)$ hours pass in World B, $t$ hours pass in World A.

How many hours will pass in World A while Taro studies for $T$ hours in World B?

## Constraints

- All values in input are integers.
- $1 \leq T \leq 100$
- $1 \leq X \leq 100$

## Input

Input is given from Standard Input in the following format:

> $T$ $X$

## Output

Print the number of hours that will pass in World A.

The output will be regarded as correct when its absolute or relative error from the judge's output is at most $10^{-3}$.

```input1
8 3
```

```output1
2.6666666667
```

While Taro studies for eight hours in World B where time passes three times as fast, $2.6666...$ hours will pass in World A.

Note that an absolute or relative error of at most $10^{-3}$ is allowed.

```input2
99 1
```

```output2
99.0000000000
```

```input3
1 100
```

```output3
0.0100000000
```